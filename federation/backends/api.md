# Federation API

The general contract is the [openEO API](https://api.openeo.org) in the latest stable version of the 1.x branch.

The aggregator that proxies the back-ends in the federation also implements the same API, but it also implements the "Federation Extension" (currently in draft state).

## Authentication and authorization

This important aspect of the federation is standardized by the [AARC Blueprint Architecture](https://aarc-project.eu/architecture/). EGI Check-in is the concrete implementation that is currently in use.

### Authentication

The openEO platform federation standardizes on the use of [EGI Check-in](https://aai.egi.eu) as identity provider. Backends have to support the use of openID connect + PKCE, to enable this and register a client with EGI Check-in. 

## Authorization

### Entitlements

Users of the federation are organized under the 'vo.openeo.cloud' virtual organization in EGI Check-in. Inside the virtual organization, different roles can be assigned to a user, to indicate that they have a certain subscription, or even on a more fine-grained level are entitled to specific actions or resources.
The mechanism to check this, is again supported by EGI Check-in, under the 'eduperson_entitlement' claim: https://docs.egi.eu/providers/check-in/sp/#claims

### Credits

The second criterium for authorization is based on credits that are available to a user. Credits allow the platform to limit the volume of data access and processing operations that a user can perform during a given time frame. The amount of available credits depends on the subscription.
When the credit balance of a user goes below zero, processing operations can be blocked.

### Aggregator rules

Based on the subscription and available credits, the aggregator can implement these rules:

1. Credit checks to block starting of batch jobs, synchronous requests to /result and viewing services.
2. Rate limiting (TBD)

### Backend rules

Some authorization rules will need to be enforced by the backends themselves:

1. Basic access and access to user specific resources based on subscription role.
2. Number of concurrent batch jobs
3. Available processing resources, batch job priorities
4. Batch job result data volume
5. Access to restricted collections




