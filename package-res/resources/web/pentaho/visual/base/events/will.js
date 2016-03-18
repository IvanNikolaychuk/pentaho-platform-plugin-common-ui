/*!
 * Copyright 2010 - 2016 Pentaho Corporation. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
  "pentaho/lang/Event",
  "pentaho/util/error"
], function(Event) {
  "use strict";

  /**
   * Creates a `will` event of a given type.
   *
   * @name pentaho.visual.base.events.will
   * @amd {pentaho.type.Factory.<pentaho.visual.base.events.Will>} pentaho/visual/base/events/will
   */
  return function will(type) {
    var fullType = "will:" + type;

    /**
     * @name pentaho.visual.base.events.Will
     * @class
     * @abstract
     * @extends pentaho.lang.Event
     * @classDesc The class of `will:` events.
     *
     * @constructor
     * @description Creates a base `Will` event.
     * @param {!Object} source - The object where the event will be initially emitted.
     */
    return Event.extend("pentaho.visual.base.events.Will",
      /** @lends pentaho.visual.base.events.Will# */{
        constructor: function(source) {
          this.base(this.constructor.type, source, true);
        }
      }, {
        get type() {
          return fullType;
        }
      });
  };

});