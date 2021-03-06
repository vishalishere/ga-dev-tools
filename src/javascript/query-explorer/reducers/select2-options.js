// Copyright 2016 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


import * as types from '../actions/types';


let defaultOptions = {
  metrics: [],
  dimensions: [],
  sort: [],
  segments: [],
};


/**
 * Updates the select2Options state tree.
 * @param {Object} state
 * @param {Object} action
 * @return {Array} The updated state.
 */
export default function select2Options(state = defaultOptions, action) {
  let {select2Options} = action;

  switch (action.type) {

    case types.UPDATE_SELECT2_OPTIONS:
      return {
        ...state,
        ...select2Options,
      };

    default:
      return state;
  }
}
