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
], function(Event, errorUtil) {
  "use strict";

  /**
   * Creates a `rejected` event of a given type.
   *
   * @name pentaho.visual.base.events.rejected
   * @amd {pentaho.type.Factory.<pentaho.visual.base.events.Rejected>} pentaho/visual/base/events/rejected
   */
  return function rejected(type) {
    var fullType = "rejected:" + type;

    /**
     * @name pentaho.visual.base.events.Rejected
     * @class
     * @abstract
     * @extends pentaho.lang.Event
     * @classDesc The class of `rejected:` events.
     *
     * @constructor
     * @description Creates a base `Rejected` event.
     * @param {!Object} source - The object where the event will be initially emitted.
     * @param {!Error|pentaho.lang.UserError} error - The error of a rejected {@link pentaho.lang.ActionResult|ActionResult}.
     */
    return Event.extend("pentaho.visual.base.events.Rejected",
      /** @lends pentaho.visual.base.events.Rejected# */{
        constructor: function(source, error) {
          if(!error) throw errorUtil.argRequired("error");
          this.base(this.constructor.type, source, false);
          this.error = error;
        }
      }, {
        get type() {
          return fullType;
        }
      });
  };

});
