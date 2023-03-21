#!/usr/bin/env node
import {getUserName} from "../src/cli.js";
import {evenGame} from "../src/brain-even-logic.js";
export const userName = getUserName();
evenGame();