/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ConferencesQueryVariables = {};
export type ConferencesQueryResponse = {
    readonly allConferences: ReadonlyArray<{
        readonly id: string;
    }>;
};
export type ConferencesQuery = {
    readonly response: ConferencesQueryResponse;
    readonly variables: ConferencesQueryVariables;
};



/*
query ConferencesQuery {
  allConferences {
    id
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "alias": null,
            "args": null,
            "concreteType": "Conference",
            "kind": "LinkedField",
            "name": "allConferences",
            "plural": true,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                }
            ],
            "storageKey": null
        } as any)
    ];
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "ConferencesQuery",
            "selections": (v0 /*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "ConferencesQuery",
            "selections": (v0 /*: any*/)
        },
        "params": {
            "cacheID": "17cbf9fb41fdc647cfd87f70780bf16e",
            "id": null,
            "metadata": {},
            "name": "ConferencesQuery",
            "operationKind": "query",
            "text": "query ConferencesQuery {\n  allConferences {\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '996d53a1013ed2efd2e0a284e04bc8a5';
export default node;
