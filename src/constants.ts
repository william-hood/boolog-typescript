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

import * as path from 'path';
import { THEME_LIGHT } from "./theme-light";

export const EMOJI_SETUP:string = "🛠";
export const EMOJI_CLEANUP:string = "🧹";
export const EMOJI_PASSING_TEST:string = "✅";
export const EMOJI_SUBJECTIVE_TEST:string = "🤔";
export const EMOJI_INCONCLUSIVE_TEST:string = "🛑";
export const EMOJI_FAILING_TEST:string = "❌";
export const EMOJI_DEBUG:string = "🐞";
export const EMOJI_ERROR:string = "😱";
export const EMOJI_BOOLOG:string = "📝";
export const EMOJI_TEXT_BOOLOG_CONCLUDE:string = "⤴️";
export const EMOJI_TEXT_BLANK_LINE:string = "";
export const EMOJI_OBJECT:string = "🔲";
export const EMOJI_CAUSED_BY:string = "→";
export const EMOJI_OUTGOING:string = "↗️";
export const EMOJI_INCOMING:string = "↩️";
export const UNKNOWN:string = "(unknown)";
export const THEME_NONE:string = "";
export const THEME_DEFAULT:string = THEME_LIGHT;

// These were internal scope in the Kotlin version
export const NAMELESS:string = "(name not given)";
export const ALREADY_CONCLUDED_MESSAGE:string = "An attempt was made to write to a boolog that was already concluded.\r\n<li>Once a Boolog has been concluded it can no longer be written to.\r\n<li>Passing a Boolog to the ShowBoolog() method will automatically conclude it.";
export const MAX_OBJECT_FIELDS_TO_DISPLAY:number = 10;
export const MAX_SHOW_OBJECT_RECURSION:number = 10;
export const MAX_HEADERS_TO_DISPLAY:number = 10;
export const MAX_BODY_LENGTH_TO_DISPLAY:number = 500;
export const UNUSED_FILE_DESCRIPTOR: number = -1;
export const FILE_SEPARATOR = path.sep;
