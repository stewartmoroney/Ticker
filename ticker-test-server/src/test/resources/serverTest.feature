Feature: Server
  Scenario: A new session
    When A new Session is started
    Then An existing Session is closed

  Scenario: Instruments are requested
    When Session requests instruments
    """
    {
      "type": "InstrumentRequest"
    }
    """
    Then session expects response
    """
    {"instruments":[{"id":"1","name":"ins1"},{"id":"2","name":"ins2"},{"id":"3","name":"ins3"}],"type":"InstrumentResponse"}
    """
    Then An existing Session is closed


