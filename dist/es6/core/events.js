import { EventEmitter as _EventEmitter } from "events";
export class EventEmitter {
    constructor() {
        this._emitter = new _EventEmitter();
    }
    on(event, callback) {
        return this._emitter.on(event, callback);
    }
    emit(label, data = null) {
        return this._emitter.emit(label, data);
    }
}