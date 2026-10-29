import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { GTM_ID, GTM_READY, PIXEL_ID, advertisingAllowed, canReportLead, parseTrace } from "./tracking-policy.ts";
describe("Requested tracking rules", () => {
  it("uses the requested GTM container", () => assert.equal(GTM_ID, "GTM-NQZH2L93"));
  it("keeps the unaudited personal-data container disabled", () => assert.equal(GTM_READY, false));
  it("uses the requested Meta pixel", () => assert.equal(PIXEL_ID, "1051251949505769"));
  it("blocks regulated and unknown regions until acceptance", () => {
    for (const region of ["BR", "DE", "GB", null, "XX", "T1"]) assert.equal(advertisingAllowed(region, undefined), false);
    assert.equal(advertisingAllowed("BR", { advertising: true }), true);
  });
  it("honors refusal and opt-outs even outside regulated regions", () => {
    assert.equal(advertisingAllowed("US", undefined), true);
    assert.equal(advertisingAllowed("US", { advertising: false }), false);
    assert.equal(advertisingAllowed("US", { advertising: true }, true), false);
  });
  it("does not replay leads or send after withdrawal", () => {
    assert.equal(canReportLead(false, true), false);
    assert.equal(canReportLead(true, false), false);
    assert.equal(canReportLead(true, true), true);
  });
  it("rejects rewritten or unknown region traces", () => {
    assert.equal(parseTrace("h=example.com\nloc=BR", "example.com"), "BR");
    assert.equal(parseTrace("h=proxy.com\nloc=US", "example.com"), null);
    assert.equal(parseTrace("h=example.com\nloc=XX", "example.com"), null);
  });
});