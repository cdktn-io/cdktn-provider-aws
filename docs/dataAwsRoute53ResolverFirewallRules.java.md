# `dataAwsRoute53ResolverFirewallRules` Submodule <a name="`dataAwsRoute53ResolverFirewallRules` Submodule" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverFirewallRules <a name="DataAwsRoute53ResolverFirewallRules" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules aws_route53_resolver_firewall_rules}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_firewall_rules.DataAwsRoute53ResolverFirewallRules;

DataAwsRoute53ResolverFirewallRules.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .firewallRuleGroupId(java.lang.String)
//  .action(java.lang.String)
//  .id(java.lang.String)
//  .priority(java.lang.Number)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#firewall_rule_group_id DataAwsRoute53ResolverFirewallRules#firewall_rule_group_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#action DataAwsRoute53ResolverFirewallRules#action}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#id DataAwsRoute53ResolverFirewallRules#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#priority DataAwsRoute53ResolverFirewallRules#priority}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.firewallRuleGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#firewall_rule_group_id DataAwsRoute53ResolverFirewallRules#firewall_rule_group_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#action DataAwsRoute53ResolverFirewallRules#action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#id DataAwsRoute53ResolverFirewallRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#priority DataAwsRoute53ResolverFirewallRules#priority}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#region DataAwsRoute53ResolverFirewallRules#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetAction"></a>

```java
public void resetAction()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetId"></a>

```java
public void resetId()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsRoute53ResolverFirewallRules resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_firewall_rules.DataAwsRoute53ResolverFirewallRules;

DataAwsRoute53ResolverFirewallRules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_firewall_rules.DataAwsRoute53ResolverFirewallRules;

DataAwsRoute53ResolverFirewallRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_firewall_rules.DataAwsRoute53ResolverFirewallRules;

DataAwsRoute53ResolverFirewallRules.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_firewall_rules.DataAwsRoute53ResolverFirewallRules;

DataAwsRoute53ResolverFirewallRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsRoute53ResolverFirewallRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsRoute53ResolverFirewallRules resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsRoute53ResolverFirewallRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsRoute53ResolverFirewallRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsRoute53ResolverFirewallRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRules">firewallRules</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList">DataAwsRoute53ResolverFirewallRulesFirewallRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRuleGroupIdInput">firewallRuleGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `firewallRules`<sup>Required</sup> <a name="firewallRules" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRules"></a>

```java
public DataAwsRoute53ResolverFirewallRulesFirewallRulesList getFirewallRules();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList">DataAwsRoute53ResolverFirewallRulesFirewallRulesList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `firewallRuleGroupIdInput`<sup>Optional</sup> <a name="firewallRuleGroupIdInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRuleGroupIdInput"></a>

```java
public java.lang.String getFirewallRuleGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRuleGroupId"></a>

```java
public java.lang.String getFirewallRuleGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverFirewallRulesConfig <a name="DataAwsRoute53ResolverFirewallRulesConfig" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_firewall_rules.DataAwsRoute53ResolverFirewallRulesConfig;

DataAwsRoute53ResolverFirewallRulesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .firewallRuleGroupId(java.lang.String)
//  .action(java.lang.String)
//  .id(java.lang.String)
//  .priority(java.lang.Number)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#firewall_rule_group_id DataAwsRoute53ResolverFirewallRules#firewall_rule_group_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#action DataAwsRoute53ResolverFirewallRules#action}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#id DataAwsRoute53ResolverFirewallRules#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#priority DataAwsRoute53ResolverFirewallRules#priority}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.firewallRuleGroupId"></a>

```java
public java.lang.String getFirewallRuleGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#firewall_rule_group_id DataAwsRoute53ResolverFirewallRules#firewall_rule_group_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#action DataAwsRoute53ResolverFirewallRules#action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#id DataAwsRoute53ResolverFirewallRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#priority DataAwsRoute53ResolverFirewallRules#priority}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/route53_resolver_firewall_rules#region DataAwsRoute53ResolverFirewallRules#region}

---

### DataAwsRoute53ResolverFirewallRulesFirewallRules <a name="DataAwsRoute53ResolverFirewallRulesFirewallRules" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRules.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_firewall_rules.DataAwsRoute53ResolverFirewallRulesFirewallRules;

DataAwsRoute53ResolverFirewallRulesFirewallRules.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRoute53ResolverFirewallRulesFirewallRulesList <a name="DataAwsRoute53ResolverFirewallRulesFirewallRulesList" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_firewall_rules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList;

new DataAwsRoute53ResolverFirewallRulesFirewallRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.get"></a>

```java
public DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference <a name="DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_firewall_rules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference;

new DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideDomain">blockOverrideDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideTtl">blockOverrideTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockResponse">blockResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.confidenceThreshold">confidenceThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creatorRequestId">creatorRequestId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.dnsThreatProtection">dnsThreatProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallDomainListId">firewallDomainListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallDomainRedirectionAction">firewallDomainRedirectionAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallThreatProtectionId">firewallThreatProtectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.modificationTime">modificationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.qType">qType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRules">DataAwsRoute53ResolverFirewallRulesFirewallRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `blockOverrideDnsType`<sup>Required</sup> <a name="blockOverrideDnsType" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideDnsType"></a>

```java
public java.lang.String getBlockOverrideDnsType();
```

- *Type:* java.lang.String

---

##### `blockOverrideDomain`<sup>Required</sup> <a name="blockOverrideDomain" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideDomain"></a>

```java
public java.lang.String getBlockOverrideDomain();
```

- *Type:* java.lang.String

---

##### `blockOverrideTtl`<sup>Required</sup> <a name="blockOverrideTtl" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideTtl"></a>

```java
public java.lang.Number getBlockOverrideTtl();
```

- *Type:* java.lang.Number

---

##### `blockResponse`<sup>Required</sup> <a name="blockResponse" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockResponse"></a>

```java
public java.lang.String getBlockResponse();
```

- *Type:* java.lang.String

---

##### `confidenceThreshold`<sup>Required</sup> <a name="confidenceThreshold" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.confidenceThreshold"></a>

```java
public java.lang.String getConfidenceThreshold();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `creatorRequestId`<sup>Required</sup> <a name="creatorRequestId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creatorRequestId"></a>

```java
public java.lang.String getCreatorRequestId();
```

- *Type:* java.lang.String

---

##### `dnsThreatProtection`<sup>Required</sup> <a name="dnsThreatProtection" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.dnsThreatProtection"></a>

```java
public java.lang.String getDnsThreatProtection();
```

- *Type:* java.lang.String

---

##### `firewallDomainListId`<sup>Required</sup> <a name="firewallDomainListId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallDomainListId"></a>

```java
public java.lang.String getFirewallDomainListId();
```

- *Type:* java.lang.String

---

##### `firewallDomainRedirectionAction`<sup>Required</sup> <a name="firewallDomainRedirectionAction" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallDomainRedirectionAction"></a>

```java
public java.lang.String getFirewallDomainRedirectionAction();
```

- *Type:* java.lang.String

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallRuleGroupId"></a>

```java
public java.lang.String getFirewallRuleGroupId();
```

- *Type:* java.lang.String

---

##### `firewallThreatProtectionId`<sup>Required</sup> <a name="firewallThreatProtectionId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallThreatProtectionId"></a>

```java
public java.lang.String getFirewallThreatProtectionId();
```

- *Type:* java.lang.String

---

##### `modificationTime`<sup>Required</sup> <a name="modificationTime" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.modificationTime"></a>

```java
public java.lang.String getModificationTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `qType`<sup>Required</sup> <a name="qType" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.qType"></a>

```java
public java.lang.String getQType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.internalValue"></a>

```java
public DataAwsRoute53ResolverFirewallRulesFirewallRules getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRules">DataAwsRoute53ResolverFirewallRulesFirewallRules</a>

---



