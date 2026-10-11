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

import * as os from 'os';
import * as fs from 'node:fs'
import { Boolog } from '../src/boolog';
import { FILE_SEPARATOR } from '../src/constants';

function main(): void {
    // The line below will force a workaround so at least the HTML
    // output is correct when running on Windows. You may also need
    // to get the new Windows Terminal and Set Windows to use UTF-8
    // by default (like every other OS does). To do this open Windows
    // Settings, then search for and go into Language Settings. Scroll
    // down and click "Administrative language settings", then
    // click "Change system locale" and check the box labeled
    // "Beta: Use Unicode UTF-8 for worldwide language support".
    // As of June 2023 the line below is only necessary on Microsoft
    // Windows and only when not running via IntelliJ or Eclipse.
    //System.setProperty("file.encoding", "UTF-8")

    const homeFolder: string = os.homedir();
    let outputFilePath:string[] = [];

    outputFilePath.push(homeFolder);
    outputFilePath.push(FILE_SEPARATOR);
    outputFilePath.push("Documents");
    outputFilePath.push(FILE_SEPARATOR);
    outputFilePath.push("Test Results");
    outputFilePath.push(FILE_SEPARATOR);
    outputFilePath.push("Boolog TypeScript Example.html");

    let log:Boolog = new Boolog("Boolog TypeScript Example", "", outputFilePath.join(""));
    
    log.skipLine();
    log.info("Boolog is an HTML-based rich logging system capable of visual renditions of arrays, maps, iterables, HTTP requests & responses, exceptions (or any other Throwable), and any other class or object. One Boolog instance can even embed another as a log subsection.");
    log.info("When used for debugging control flow, HTTP requests & responses, activity logging, or any other purpose, output from Boolog will easier to read and work with than ordinary console output (though it does provide counterpart output to the console in addition to its HTML log file).");
    log.info("All of the above messages represent \"normal\" log output with the .info() function.");
    log.info("When debugging a program, you might need a single line of information to stand out.");
    log.info("If you use the .debug() function instead of .info() the message will be highlighted in yellow like this...");
    log.debug("Boolog is the integrated log system for the Koarse Grind test framework.");
    log.info("Similar to that is the .error() function. The only difference is an icon in the log identifying the line as an error...");
    log.error("Uh-oh... That wasn't supposed to happen!");
    log.skipLine();
    log.info("Why would you want to log directly to HTML?");
    log.info("Because it's very hard, using ordinary plain-text logging, to visualize the workings of a cloud service, test suite, or other back-end process.");
    log.info("Let's suppose you need to check on the state of a data structure at a certain point in the program.");
    log.info("Look at the class \"TestStruct\" at the bottom of this source code file. Let's render one!");
}