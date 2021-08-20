/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Config } from '@jest/types';
import expect = require('expect');
export declare type Expect = typeof expect;
declare const _default: (config: Pick<Config.GlobalConfig, 'expand'>) => Expect;
export default _default;
