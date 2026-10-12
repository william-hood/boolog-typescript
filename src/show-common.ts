// Copyright (c) 2026 William Arthur Hood
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
// of the Software, and to permit persons to whom the Software is furnished
// to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.

import { Boolog, highlight } from "./boolog";
import { EMOJI_INCONCLUSIVE_TEST, EMOJI_OBJECT, MAX_SHOW_OBJECT_RECURSION, NAMELESS } from "./constants";
import { processString } from "./string-handling";

declare module './boolog' {
    interface Boolog {
        beginShow(timestamp:Date, className:string, variableName:string, style:string, recurseLevel:number): string[];
        show(target:any, targetVariableName:string, recurseLevel:number): string;
    }
}

export function shouldRecurse(candidate:any): boolean {
    if (candidate === undefined) {
        return false;
    }

    if (candidate == null) {
        return false;
    }

    if (typeof candidate === "string") {
        return false;
    }

    // TODO: Kotlin version also returns false for Java primitive types

    return true;
}

// TODO: Counterpart to Kotlin function shouldRender if necessary
export function shouldRender(): boolean {
    return true;
}

Boolog.prototype.beginShow = function(this:Boolog, timestamp:Date, className:string, variableName:string, style:string, recurseLevel:number): string[] {
    let result:string[] = [];
    result.push("\r\n<div class=\"object ");
    result.push(style);
    result.push(" centered\">\r\n");

    if (recurseLevel > 0) {
        let identifier:string = crypto.randomUUID();
        result.push("<label for=\"");
        result.push(identifier);
        result.push("\">\r\n<input id=\"");
        result.push(identifier);
        result.push("\" class=\"gone\" type=\"checkbox\">\r\n");
    }

    result.push("<h2>");
    result.push(className);
    result.push("</h2>\r\n<small>");

    if (variableName != NAMELESS) {
        result.push('"');
    }

    result.push(variableName);

    if (variableName != NAMELESS) {
        result.push('"');
    }

    result.push("</small><br>\r\n");

    if (recurseLevel > 0) {
        result.push("<div class=\"");
        result.push(this.getEncapsulationTag());
        result.push("\">\r\n");
    }

    this.echoPlainText(`Showing ${className}: ${variableName} (details in HTML log)`, EMOJI_OBJECT, timestamp);

    return result;
}

Boolog.prototype.show = function(this:Boolog, target:any, targetVariableName:string = NAMELESS, recurseLevel:number = 0): string {
    if (recurseLevel > MAX_SHOW_OBJECT_RECURSION) {
        return `<div class="outlined">${EMOJI_INCONCLUSIVE_TEST} Too Many Levels In ${EMOJI_INCONCLUSIVE_TEST}</div>`
    }

    if (target == null) {
        return highlight(`(${targetVariableName} is null)`);
    }

    if (target === undefined) {
        return highlight(`(${targetVariableName} is undefined)`);
    }

    // TODO: if target is an error, show the error
    
    if (target instanceof Boolog) {
        return this.showBoolog(target, "", "", recurseLevel);
    }

    // TODO: if target is array, map, primitive array, iterable or whatever else, show that with the tailored function

    if (typeof target === "string") {
        return processString("", target, undefined);
    }

    if (shouldRecurse(target)) {
        // TODO: return this.showObject(target, targetVariableName)
    }

    return String(target);
}