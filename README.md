# PolicyGate

Check ad copy or public claims before a team ships a compliance risk.

Contract: [https://studio.genlayer.com/contracts?import-contract=0xCb1Cb2CfA7008ca659AFADFAcD3057dc4Af14a6b](https://studio.genlayer.com/contracts?import-contract=0xCb1Cb2CfA7008ca659AFADFAcD3057dc4Af14a6b)

## What this app is

PolicyGate is a compliance and messaging checker for marketing, compliance, legal, and product launch teams. Paste the copy and the policy. The contract decides whether the message is safe, needs edits, or should be blocked.

## The problem it solves

Teams regularly ship risky copy because review comes late or the policy is scattered across documents. PolicyGate checks claims against the actual rules before the message goes live.

## How the product works

1. Connect a browser wallet on GenLayer Studionet.
2. Paste ad copy, product claim, or announcement.
3. Paste compliance or brand policy.
4. Sign one write transaction to the intelligent contract.
5. Wait for the contract to return the structured result.
6. Read the verdict, score, reasons, and next action in the UI.

## What the contract decides

The contract performs this judgment onchain:

> Review the copy against the policy and decide whether it should be approved, reviewed, or rejected.

Returned fields:

- headline
- verdict
- score
- reasons
- next_action
- proof_of_advantage

The verdict is always APPROVE, REVIEW, or REJECT. The score is an integer from 0 to 100, and the reasons array is always kept short enough to read instantly.

## Why GenLayer is necessary here

This is more than keyword filtering. The contract must interpret whether the claim overreaches the policy, lacks proof, or creates real compliance exposure. That judgment is the core GenLayer action.

Consensus mode: **Non-comparative equivalence**

Validators independently apply the same task and criteria to the case. This keeps the verdict stable when the app is enforcing a policy, gate, or approval rule with a tight output schema.

## Example input shape

Ad copy, product claim, or announcement:

~~~text
Our supplement cures burnout in 48 hours and doubles focus. Trusted by doctors worldwide.
~~~

Compliance or brand policy:

~~~text
Do not claim guaranteed medical outcomes. Avoid unsupported authority statements or hidden conditions.
~~~

## Important files

- contracts/policygate.py: intelligent contract
- deploy/001_deploy.mjs: deployment script for Studionet
- src/App.tsx: browser UI
- src/lib/genlayer.ts: wallet connection and contract calls
- src/appConfig.ts: app task, copy, placeholders, and mode

## Run locally

1. pnpm install
2. Ensure .env.local contains VITE_CONTRACT_ADDRESS=0xCb1Cb2CfA7008ca659AFADFAcD3057dc4Af14a6b
3. Ensure .env.local contains VITE_GENLAYER_RPC_URL=https://studio.genlayer.com/api
4. pnpm dev
5. Open the app in a browser with Rabby, MetaMask, or another injected wallet that can switch to GenLayer Studionet.

## Deployed contract

- Address: 0xCb1Cb2CfA7008ca659AFADFAcD3057dc4Af14a6b
- Studio import: [https://studio.genlayer.com/contracts?import-contract=0xCb1Cb2CfA7008ca659AFADFAcD3057dc4Af14a6b](https://studio.genlayer.com/contracts?import-contract=0xCb1Cb2CfA7008ca659AFADFAcD3057dc4Af14a6b)
