$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Application.feature");
formatter.feature({
  "line": 1,
  "name": "Test CRM",
  "description": "",
  "id": "test-crm",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test CRM website",
  "description": "",
  "id": "test-crm;test-crm-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open CRM homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "landing page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "title of homepage is retrived",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "export is explored",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "test-crm;test-crm-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "test-crm;test-crm-website;;1"
    },
    {
      "cells": [
        "groupautomation",
        "Test@12345"
      ],
      "line": 15,
      "id": "test-crm;test-crm-website;;2"
    },
    {
      "cells": [
        "groupautomation7832",
        "Test@12345jkfnmd"
      ],
      "line": 16,
      "id": "test-crm;test-crm-website;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Test CRM website",
  "description": "",
  "id": "test-crm;test-crm-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open CRM homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"groupautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "landing page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "title of homepage is retrived",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "export is explored",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.i_open_Chrome()"
});
formatter.result({
  "duration": 17663440200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "groupautomation",
      "offset": 15
    },
    {
      "val": "Test@12345",
      "offset": 37
    }
  ],
  "location": "SmokeTest.i_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 2429393400,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.click_on_login()"
});
formatter.result({
  "duration": 11502300300,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.landing_page_should_be_displayed()"
});
formatter.result({
  "duration": 122500,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.title_is_retrieved()"
});
formatter.result({
  "duration": 3376109500,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.export()"
});
formatter.result({
  "duration": 1843663900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Test CRM website",
  "description": "",
  "id": "test-crm;test-crm-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open CRM homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"groupautomation7832\" and \"Test@12345jkfnmd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "landing page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "title of homepage is retrived",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "export is explored",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.i_open_Chrome()"
});
formatter.result({
  "duration": 12618500600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "groupautomation7832",
      "offset": 15
    },
    {
      "val": "Test@12345jkfnmd",
      "offset": 41
    }
  ],
  "location": "SmokeTest.i_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 2313774100,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.click_on_login()"
});
formatter.result({
  "duration": 9123114400,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.landing_page_should_be_displayed()"
});
formatter.result({
  "duration": 68400,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.title_is_retrieved()"
});
formatter.result({
  "duration": 50412200,
  "error_message": "org.openqa.selenium.NoSuchFrameException: No frame element found by name or id mainpanel\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-2FPBR8N\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:881)\r\n\tat pages.Home.setup(Home.java:22)\r\n\tat stepDefinition.SmokeTest.title_is_retrieved(SmokeTest.java:139)\r\n\tat ✽.And title of homepage is retrived(Application.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SmokeTest.export()"
});
formatter.result({
  "status": "skipped"
});
});