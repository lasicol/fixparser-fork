import FIXServer, { Field, Messages, OrderStatus, ExecType } from '../src/FIXServer';
import { Fields, Side } from '../src/FIXParser'; // from 'fixparser/server';

const fixServer = new FIXServer();
fixServer.createServer({
    host: 'localhost',
    port: 9878,
    sender: 'SERVER',
    target: 'CLIENT',
});

fixServer.on('open', () => {
    console.log('Open');
});
fixServer.on('message', (message) => {
    console.log('server received message', message.description, message.messageString);
    if (message.messageType === Messages.NewOrderSingle) {
        // Respond with ExecutionReport
        const executionReport = fixServer.createMessage(
            new Field(Fields.MsgType, Messages.ExecutionReport),
            new Field(Fields.MsgSeqNum, fixServer.getNextTargetMsgSeqNum()),
            new Field(Fields.SenderCompID, 'SERVER'),
            new Field(Fields.SendingTime, fixServer.getTimestamp()),
            new Field(Fields.TargetCompID, 'CLIENT'),
            new Field(Fields.AvgPx, message.getField(Fields.Price) ? message.getField(Fields.Price).value : 0),
            new Field(
                Fields.ClOrdID,
                message.getField(Fields.ClOrdID) ? message.getField(Fields.ClOrdID).value : 'N/A',
            ),
            new Field(Fields.CumQty, message.getField(Fields.OrderQty) ? message.getField(Fields.OrderQty).value : 0),
            new Field(Fields.Symbol, message.getField(Fields.Symbol) ? message.getField(Fields.Symbol).value : 'N/A'),
            new Field(Fields.LastPx, message.getField(Fields.Price) ? message.getField(Fields.Price).value : 0),
            new Field(Fields.OrderID, 55),
            new Field(Fields.OrderQty, message.getField(Fields.OrderQty) ? message.getField(Fields.OrderQty).value : 0),
            new Field(Fields.OrdStatus, OrderStatus.Filled),
            new Field(Fields.Side, Side.Buy),
            new Field(Fields.ExecType, ExecType.Trade),
            new Field(Fields.LeavesQty, 0),
        );
        const messages = fixServer.parse(executionReport.encode());
        console.log('sending message', messages[0].description, messages[0].messageString.replace(/\x01/g, '|'));
        fixServer.send(executionReport);
    }
});
fixServer.on('close', () => {
    console.log('Disconnected');
});
