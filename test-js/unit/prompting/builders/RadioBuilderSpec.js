/*!
 * Copyright 2010 - 2015 Pentaho Corporation.  All rights reserved.
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
 *
 */
define(['common-ui/prompting/builders/RadioBuilder'], function(RadioBuilder) {

  describe("RadioBuilder", function() {

    var args = {
      promptPanel: {
        generateWidgetGUID: function() { },
        getParameterName: function() { }
      }, 
      param:  {
        values: { },
        attributes: { }
      }
    };

    var radioBuilder;

    beforeEach(function() {
      radioBuilder = new RadioBuilder();
    });

    it("should throw an error building component with no parameters", function() {
      expect(radioBuilder.build).toThrow();
    });

    it("should return a RadioComponent", function() {
      var component = radioBuilder.build(args);
      expect(component.type).toBe('radio');
    });

  });

});