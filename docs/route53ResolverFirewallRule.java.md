# `route53ResolverFirewallRule` Submodule <a name="`route53ResolverFirewallRule` Submodule" id="@cdktn/provider-aws.route53ResolverFirewallRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallRule <a name="Route53ResolverFirewallRule" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule aws_route53_resolver_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer"></a>

```java
import io.cdktn.providers.aws.route53_resolver_firewall_rule.Route53ResolverFirewallRule;

Route53ResolverFirewallRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .firewallRuleGroupId(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
//  .blockOverrideDnsType(java.lang.String)
//  .blockOverrideDomain(java.lang.String)
//  .blockOverrideTtl(java.lang.Number)
//  .blockResponse(java.lang.String)
//  .confidenceThreshold(java.lang.String)
//  .dnsThreatProtection(java.lang.String)
//  .firewallDomainListId(java.lang.String)
//  .firewallDomainRedirectionAction(java.lang.String)
//  .id(java.lang.String)
//  .qType(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#action Route53ResolverFirewallRule#action}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#name Route53ResolverFirewallRule#name}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#priority Route53ResolverFirewallRule#priority}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockOverrideDomain">blockOverrideDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_override_domain Route53ResolverFirewallRule#block_override_domain}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockOverrideTtl">blockOverrideTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockResponse">blockResponse</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_response Route53ResolverFirewallRule#block_response}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.confidenceThreshold">confidenceThreshold</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#confidence_threshold Route53ResolverFirewallRule#confidence_threshold}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.dnsThreatProtection">dnsThreatProtection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#dns_threat_protection Route53ResolverFirewallRule#dns_threat_protection}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.firewallDomainListId">firewallDomainListId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.firewallDomainRedirectionAction">firewallDomainRedirectionAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_redirection_action Route53ResolverFirewallRule#firewall_domain_redirection_action}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#id Route53ResolverFirewallRule#id}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.qType">qType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#q_type Route53ResolverFirewallRule#q_type}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#action Route53ResolverFirewallRule#action}.

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.firewallRuleGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#name Route53ResolverFirewallRule#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#priority Route53ResolverFirewallRule#priority}.

---

##### `blockOverrideDnsType`<sup>Optional</sup> <a name="blockOverrideDnsType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockOverrideDnsType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}.

---

##### `blockOverrideDomain`<sup>Optional</sup> <a name="blockOverrideDomain" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockOverrideDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_override_domain Route53ResolverFirewallRule#block_override_domain}.

---

##### `blockOverrideTtl`<sup>Optional</sup> <a name="blockOverrideTtl" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockOverrideTtl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}.

---

##### `blockResponse`<sup>Optional</sup> <a name="blockResponse" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockResponse"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_response Route53ResolverFirewallRule#block_response}.

---

##### `confidenceThreshold`<sup>Optional</sup> <a name="confidenceThreshold" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.confidenceThreshold"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#confidence_threshold Route53ResolverFirewallRule#confidence_threshold}.

---

##### `dnsThreatProtection`<sup>Optional</sup> <a name="dnsThreatProtection" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.dnsThreatProtection"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#dns_threat_protection Route53ResolverFirewallRule#dns_threat_protection}.

---

##### `firewallDomainListId`<sup>Optional</sup> <a name="firewallDomainListId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.firewallDomainListId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}.

---

##### `firewallDomainRedirectionAction`<sup>Optional</sup> <a name="firewallDomainRedirectionAction" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.firewallDomainRedirectionAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_redirection_action Route53ResolverFirewallRule#firewall_domain_redirection_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#id Route53ResolverFirewallRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `qType`<sup>Optional</sup> <a name="qType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.qType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#q_type Route53ResolverFirewallRule#q_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#region Route53ResolverFirewallRule#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDnsType">resetBlockOverrideDnsType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDomain">resetBlockOverrideDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideTtl">resetBlockOverrideTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockResponse">resetBlockResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetConfidenceThreshold">resetConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetDnsThreatProtection">resetDnsThreatProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetFirewallDomainListId">resetFirewallDomainListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetFirewallDomainRedirectionAction">resetFirewallDomainRedirectionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetQType">resetQType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBlockOverrideDnsType` <a name="resetBlockOverrideDnsType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDnsType"></a>

```java
public void resetBlockOverrideDnsType()
```

##### `resetBlockOverrideDomain` <a name="resetBlockOverrideDomain" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDomain"></a>

```java
public void resetBlockOverrideDomain()
```

##### `resetBlockOverrideTtl` <a name="resetBlockOverrideTtl" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideTtl"></a>

```java
public void resetBlockOverrideTtl()
```

##### `resetBlockResponse` <a name="resetBlockResponse" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockResponse"></a>

```java
public void resetBlockResponse()
```

##### `resetConfidenceThreshold` <a name="resetConfidenceThreshold" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetConfidenceThreshold"></a>

```java
public void resetConfidenceThreshold()
```

##### `resetDnsThreatProtection` <a name="resetDnsThreatProtection" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetDnsThreatProtection"></a>

```java
public void resetDnsThreatProtection()
```

##### `resetFirewallDomainListId` <a name="resetFirewallDomainListId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetFirewallDomainListId"></a>

```java
public void resetFirewallDomainListId()
```

##### `resetFirewallDomainRedirectionAction` <a name="resetFirewallDomainRedirectionAction" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetFirewallDomainRedirectionAction"></a>

```java
public void resetFirewallDomainRedirectionAction()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetId"></a>

```java
public void resetId()
```

##### `resetQType` <a name="resetQType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetQType"></a>

```java
public void resetQType()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverFirewallRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isConstruct"></a>

```java
import io.cdktn.providers.aws.route53_resolver_firewall_rule.Route53ResolverFirewallRule;

Route53ResolverFirewallRule.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.route53_resolver_firewall_rule.Route53ResolverFirewallRule;

Route53ResolverFirewallRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.route53_resolver_firewall_rule.Route53ResolverFirewallRule;

Route53ResolverFirewallRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.route53_resolver_firewall_rule.Route53ResolverFirewallRule;

Route53ResolverFirewallRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53ResolverFirewallRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53ResolverFirewallRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53ResolverFirewallRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53ResolverFirewallRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverFirewallRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallThreatProtectionId">firewallThreatProtectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsTypeInput">blockOverrideDnsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomainInput">blockOverrideDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtlInput">blockOverrideTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponseInput">blockResponseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.confidenceThresholdInput">confidenceThresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dnsThreatProtectionInput">dnsThreatProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListIdInput">firewallDomainListIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainRedirectionActionInput">firewallDomainRedirectionActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupIdInput">firewallRuleGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.qTypeInput">qTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomain">blockOverrideDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtl">blockOverrideTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponse">blockResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.confidenceThreshold">confidenceThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dnsThreatProtection">dnsThreatProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListId">firewallDomainListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainRedirectionAction">firewallDomainRedirectionAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.qType">qType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `firewallThreatProtectionId`<sup>Required</sup> <a name="firewallThreatProtectionId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallThreatProtectionId"></a>

```java
public java.lang.String getFirewallThreatProtectionId();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `blockOverrideDnsTypeInput`<sup>Optional</sup> <a name="blockOverrideDnsTypeInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsTypeInput"></a>

```java
public java.lang.String getBlockOverrideDnsTypeInput();
```

- *Type:* java.lang.String

---

##### `blockOverrideDomainInput`<sup>Optional</sup> <a name="blockOverrideDomainInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomainInput"></a>

```java
public java.lang.String getBlockOverrideDomainInput();
```

- *Type:* java.lang.String

---

##### `blockOverrideTtlInput`<sup>Optional</sup> <a name="blockOverrideTtlInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtlInput"></a>

```java
public java.lang.Number getBlockOverrideTtlInput();
```

- *Type:* java.lang.Number

---

##### `blockResponseInput`<sup>Optional</sup> <a name="blockResponseInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponseInput"></a>

```java
public java.lang.String getBlockResponseInput();
```

- *Type:* java.lang.String

---

##### `confidenceThresholdInput`<sup>Optional</sup> <a name="confidenceThresholdInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.confidenceThresholdInput"></a>

```java
public java.lang.String getConfidenceThresholdInput();
```

- *Type:* java.lang.String

---

##### `dnsThreatProtectionInput`<sup>Optional</sup> <a name="dnsThreatProtectionInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dnsThreatProtectionInput"></a>

```java
public java.lang.String getDnsThreatProtectionInput();
```

- *Type:* java.lang.String

---

##### `firewallDomainListIdInput`<sup>Optional</sup> <a name="firewallDomainListIdInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListIdInput"></a>

```java
public java.lang.String getFirewallDomainListIdInput();
```

- *Type:* java.lang.String

---

##### `firewallDomainRedirectionActionInput`<sup>Optional</sup> <a name="firewallDomainRedirectionActionInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainRedirectionActionInput"></a>

```java
public java.lang.String getFirewallDomainRedirectionActionInput();
```

- *Type:* java.lang.String

---

##### `firewallRuleGroupIdInput`<sup>Optional</sup> <a name="firewallRuleGroupIdInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupIdInput"></a>

```java
public java.lang.String getFirewallRuleGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `qTypeInput`<sup>Optional</sup> <a name="qTypeInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.qTypeInput"></a>

```java
public java.lang.String getQTypeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `blockOverrideDnsType`<sup>Required</sup> <a name="blockOverrideDnsType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsType"></a>

```java
public java.lang.String getBlockOverrideDnsType();
```

- *Type:* java.lang.String

---

##### `blockOverrideDomain`<sup>Required</sup> <a name="blockOverrideDomain" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomain"></a>

```java
public java.lang.String getBlockOverrideDomain();
```

- *Type:* java.lang.String

---

##### `blockOverrideTtl`<sup>Required</sup> <a name="blockOverrideTtl" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtl"></a>

```java
public java.lang.Number getBlockOverrideTtl();
```

- *Type:* java.lang.Number

---

##### `blockResponse`<sup>Required</sup> <a name="blockResponse" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponse"></a>

```java
public java.lang.String getBlockResponse();
```

- *Type:* java.lang.String

---

##### `confidenceThreshold`<sup>Required</sup> <a name="confidenceThreshold" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.confidenceThreshold"></a>

```java
public java.lang.String getConfidenceThreshold();
```

- *Type:* java.lang.String

---

##### `dnsThreatProtection`<sup>Required</sup> <a name="dnsThreatProtection" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dnsThreatProtection"></a>

```java
public java.lang.String getDnsThreatProtection();
```

- *Type:* java.lang.String

---

##### `firewallDomainListId`<sup>Required</sup> <a name="firewallDomainListId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListId"></a>

```java
public java.lang.String getFirewallDomainListId();
```

- *Type:* java.lang.String

---

##### `firewallDomainRedirectionAction`<sup>Required</sup> <a name="firewallDomainRedirectionAction" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainRedirectionAction"></a>

```java
public java.lang.String getFirewallDomainRedirectionAction();
```

- *Type:* java.lang.String

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupId"></a>

```java
public java.lang.String getFirewallRuleGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `qType`<sup>Required</sup> <a name="qType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.qType"></a>

```java
public java.lang.String getQType();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallRuleConfig <a name="Route53ResolverFirewallRuleConfig" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.route53_resolver_firewall_rule.Route53ResolverFirewallRuleConfig;

Route53ResolverFirewallRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .firewallRuleGroupId(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
//  .blockOverrideDnsType(java.lang.String)
//  .blockOverrideDomain(java.lang.String)
//  .blockOverrideTtl(java.lang.Number)
//  .blockResponse(java.lang.String)
//  .confidenceThreshold(java.lang.String)
//  .dnsThreatProtection(java.lang.String)
//  .firewallDomainListId(java.lang.String)
//  .firewallDomainRedirectionAction(java.lang.String)
//  .id(java.lang.String)
//  .qType(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#action Route53ResolverFirewallRule#action}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#name Route53ResolverFirewallRule#name}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#priority Route53ResolverFirewallRule#priority}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDomain">blockOverrideDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_override_domain Route53ResolverFirewallRule#block_override_domain}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideTtl">blockOverrideTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockResponse">blockResponse</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_response Route53ResolverFirewallRule#block_response}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.confidenceThreshold">confidenceThreshold</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#confidence_threshold Route53ResolverFirewallRule#confidence_threshold}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.dnsThreatProtection">dnsThreatProtection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#dns_threat_protection Route53ResolverFirewallRule#dns_threat_protection}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallDomainListId">firewallDomainListId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallDomainRedirectionAction">firewallDomainRedirectionAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_redirection_action Route53ResolverFirewallRule#firewall_domain_redirection_action}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#id Route53ResolverFirewallRule#id}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.qType">qType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#q_type Route53ResolverFirewallRule#q_type}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#action Route53ResolverFirewallRule#action}.

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallRuleGroupId"></a>

```java
public java.lang.String getFirewallRuleGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#name Route53ResolverFirewallRule#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#priority Route53ResolverFirewallRule#priority}.

---

##### `blockOverrideDnsType`<sup>Optional</sup> <a name="blockOverrideDnsType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDnsType"></a>

```java
public java.lang.String getBlockOverrideDnsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}.

---

##### `blockOverrideDomain`<sup>Optional</sup> <a name="blockOverrideDomain" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDomain"></a>

```java
public java.lang.String getBlockOverrideDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_override_domain Route53ResolverFirewallRule#block_override_domain}.

---

##### `blockOverrideTtl`<sup>Optional</sup> <a name="blockOverrideTtl" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideTtl"></a>

```java
public java.lang.Number getBlockOverrideTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}.

---

##### `blockResponse`<sup>Optional</sup> <a name="blockResponse" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockResponse"></a>

```java
public java.lang.String getBlockResponse();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#block_response Route53ResolverFirewallRule#block_response}.

---

##### `confidenceThreshold`<sup>Optional</sup> <a name="confidenceThreshold" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.confidenceThreshold"></a>

```java
public java.lang.String getConfidenceThreshold();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#confidence_threshold Route53ResolverFirewallRule#confidence_threshold}.

---

##### `dnsThreatProtection`<sup>Optional</sup> <a name="dnsThreatProtection" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.dnsThreatProtection"></a>

```java
public java.lang.String getDnsThreatProtection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#dns_threat_protection Route53ResolverFirewallRule#dns_threat_protection}.

---

##### `firewallDomainListId`<sup>Optional</sup> <a name="firewallDomainListId" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallDomainListId"></a>

```java
public java.lang.String getFirewallDomainListId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}.

---

##### `firewallDomainRedirectionAction`<sup>Optional</sup> <a name="firewallDomainRedirectionAction" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallDomainRedirectionAction"></a>

```java
public java.lang.String getFirewallDomainRedirectionAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_redirection_action Route53ResolverFirewallRule#firewall_domain_redirection_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#id Route53ResolverFirewallRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `qType`<sup>Optional</sup> <a name="qType" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.qType"></a>

```java
public java.lang.String getQType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#q_type Route53ResolverFirewallRule#q_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/route53_resolver_firewall_rule#region Route53ResolverFirewallRule#region}

---



