// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ReputaIdentity {

    struct Agent {
        string metadataURI;
        uint256 reputationScore;
        uint256 totalInteractions;
        bool exists;
    }

    mapping(address => Agent) public agents;

    event AgentRegistered(address indexed agent, string metadataURI);
    event ReputationUpdated(address indexed agent, uint256 newScore);

    function registerAgent(string memory _metadataURI) external {
        require(!agents[msg.sender].exists, "Already registered");

        agents[msg.sender] = Agent({
            metadataURI: _metadataURI,
            reputationScore: 0,
            totalInteractions: 0,
            exists: true
        });

        emit AgentRegistered(msg.sender, _metadataURI);
    }

    function updateReputation(address _agent, uint256 _score) external {
        require(agents[_agent].exists, "Agent not found");

        agents[_agent].reputationScore = _score;
        agents[_agent].totalInteractions += 1;

        emit ReputationUpdated(_agent, _score);
    }

    function getReputation(address _agent) external view returns (uint256) {
        require(agents[_agent].exists, "Agent not found");
        return agents[_agent].reputationScore;
    }
}
