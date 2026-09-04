# `bedrockagentcoreGatewayRule` Submodule <a name="`bedrockagentcoreGatewayRule` Submodule" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreGatewayRule <a name="BedrockagentcoreGatewayRule" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule aws_bedrockagentcore_gateway_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRule;

BedrockagentcoreGatewayRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gatewayIdentifier(java.lang.String)
    .priority(java.lang.Number)
//  .action(IResolvable|java.util.List<BedrockagentcoreGatewayRuleAction>)
//  .condition(IResolvable|java.util.List<BedrockagentcoreGatewayRuleCondition>)
//  .description(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(BedrockagentcoreGatewayRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.gatewayIdentifier">gatewayIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.action">action</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>></code> | action block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.condition">condition</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>></code> | condition block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gatewayIdentifier`<sup>Required</sup> <a name="gatewayIdentifier" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.gatewayIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.action"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#action BedrockagentcoreGatewayRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.condition"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#condition BedrockagentcoreGatewayRule#condition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#region BedrockagentcoreGatewayRule#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#timeouts BedrockagentcoreGatewayRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putAction"></a>

```java
public void putAction(IResolvable|java.util.List<BedrockagentcoreGatewayRuleAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putAction.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>>

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putCondition"></a>

```java
public void putCondition(IResolvable|java.util.List<BedrockagentcoreGatewayRuleCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putCondition.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putTimeouts"></a>

```java
public void putTimeouts(BedrockagentcoreGatewayRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetAction"></a>

```java
public void resetAction()
```

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreGatewayRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isConstruct"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRule;

BedrockagentcoreGatewayRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRule;

BedrockagentcoreGatewayRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRule;

BedrockagentcoreGatewayRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRule;

BedrockagentcoreGatewayRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcoreGatewayRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockagentcoreGatewayRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcoreGatewayRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcoreGatewayRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreGatewayRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList">BedrockagentcoreGatewayRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList">BedrockagentcoreGatewayRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.systemAttribute">systemAttribute</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList">BedrockagentcoreGatewayRuleSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference">BedrockagentcoreGatewayRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.actionInput">actionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.conditionInput">conditionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifierInput">gatewayIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifier">gatewayIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.action"></a>

```java
public BedrockagentcoreGatewayRuleActionList getAction();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList">BedrockagentcoreGatewayRuleActionList</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.condition"></a>

```java
public BedrockagentcoreGatewayRuleConditionList getCondition();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList">BedrockagentcoreGatewayRuleConditionList</a>

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.systemAttribute"></a>

```java
public BedrockagentcoreGatewayRuleSystemList getSystemAttribute();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList">BedrockagentcoreGatewayRuleSystemList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.timeouts"></a>

```java
public BedrockagentcoreGatewayRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference">BedrockagentcoreGatewayRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.actionInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleAction> getActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.conditionInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleCondition> getConditionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `gatewayIdentifierInput`<sup>Optional</sup> <a name="gatewayIdentifierInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifierInput"></a>

```java
public java.lang.String getGatewayIdentifierInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.timeoutsInput"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `gatewayIdentifier`<sup>Required</sup> <a name="gatewayIdentifier" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifier"></a>

```java
public java.lang.String getGatewayIdentifier();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreGatewayRuleAction <a name="BedrockagentcoreGatewayRuleAction" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleAction;

BedrockagentcoreGatewayRuleAction.builder()
//  .configurationBundle(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundle>)
//  .routeToTarget(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTarget>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction.property.configurationBundle">configurationBundle</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>></code> | configuration_bundle block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction.property.routeToTarget">routeToTarget</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>></code> | route_to_target block. |

---

##### `configurationBundle`<sup>Optional</sup> <a name="configurationBundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction.property.configurationBundle"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundle> getConfigurationBundle();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>>

configuration_bundle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}

---

##### `routeToTarget`<sup>Optional</sup> <a name="routeToTarget" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction.property.routeToTarget"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTarget> getRouteToTarget();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>>

route_to_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#route_to_target BedrockagentcoreGatewayRule#route_to_target}

---

### BedrockagentcoreGatewayRuleActionConfigurationBundle <a name="BedrockagentcoreGatewayRuleActionConfigurationBundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionConfigurationBundle;

BedrockagentcoreGatewayRuleActionConfigurationBundle.builder()
//  .staticOverride(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride>)
//  .weightedOverride(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle.property.staticOverride">staticOverride</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>></code> | static_override block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle.property.weightedOverride">weightedOverride</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>></code> | weighted_override block. |

---

##### `staticOverride`<sup>Optional</sup> <a name="staticOverride" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle.property.staticOverride"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride> getStaticOverride();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>>

static_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#static_override BedrockagentcoreGatewayRule#static_override}

---

##### `weightedOverride`<sup>Optional</sup> <a name="weightedOverride" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle.property.weightedOverride"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride> getWeightedOverride();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>>

weighted_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#weighted_override BedrockagentcoreGatewayRule#weighted_override}

---

### BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride;

BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride.builder()
    .bundleArn(java.lang.String)
    .bundleVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride.property.bundleArn">bundleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride.property.bundleVersion">bundleVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}. |

---

##### `bundleArn`<sup>Required</sup> <a name="bundleArn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride.property.bundleArn"></a>

```java
public java.lang.String getBundleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}.

---

##### `bundleVersion`<sup>Required</sup> <a name="bundleVersion" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride.property.bundleVersion"></a>

```java
public java.lang.String getBundleVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}.

---

### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride;

BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride.builder()
//  .trafficSplit(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride.property.trafficSplit">trafficSplit</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>></code> | traffic_split block. |

---

##### `trafficSplit`<sup>Optional</sup> <a name="trafficSplit" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride.property.trafficSplit"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit> getTrafficSplit();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>>

traffic_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}

---

### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit;

BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.builder()
    .name(java.lang.String)
    .weight(java.lang.Number)
//  .configurationBundle(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle>)
//  .description(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.configurationBundle">configurationBundle</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>></code> | configuration_bundle block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}.

---

##### `configurationBundle`<sup>Optional</sup> <a name="configurationBundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.configurationBundle"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle> getConfigurationBundle();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>>

configuration_bundle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}.

---

### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle;

BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.builder()
    .bundleArn(java.lang.String)
    .bundleVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleArn">bundleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleVersion">bundleVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}. |

---

##### `bundleArn`<sup>Required</sup> <a name="bundleArn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleArn"></a>

```java
public java.lang.String getBundleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}.

---

##### `bundleVersion`<sup>Required</sup> <a name="bundleVersion" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleVersion"></a>

```java
public java.lang.String getBundleVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}.

---

### BedrockagentcoreGatewayRuleActionRouteToTarget <a name="BedrockagentcoreGatewayRuleActionRouteToTarget" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionRouteToTarget;

BedrockagentcoreGatewayRuleActionRouteToTarget.builder()
//  .staticRoute(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute>)
//  .weightedRoute(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget.property.staticRoute">staticRoute</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>></code> | static_route block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget.property.weightedRoute">weightedRoute</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>></code> | weighted_route block. |

---

##### `staticRoute`<sup>Optional</sup> <a name="staticRoute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget.property.staticRoute"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute> getStaticRoute();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>>

static_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#static_route BedrockagentcoreGatewayRule#static_route}

---

##### `weightedRoute`<sup>Optional</sup> <a name="weightedRoute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget.property.weightedRoute"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute> getWeightedRoute();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>>

weighted_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#weighted_route BedrockagentcoreGatewayRule#weighted_route}

---

### BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute <a name="BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute;

BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute.builder()
    .targetName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute.property.targetName">targetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}. |

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}.

---

### BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute <a name="BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute;

BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute.builder()
//  .trafficSplit(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute.property.trafficSplit">trafficSplit</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>></code> | traffic_split block. |

---

##### `trafficSplit`<sup>Optional</sup> <a name="trafficSplit" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute.property.trafficSplit"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit> getTrafficSplit();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>>

traffic_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}

---

### BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit <a name="BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit;

BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.builder()
    .name(java.lang.String)
    .targetName(java.lang.String)
    .weight(java.lang.Number)
//  .description(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.targetName">targetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}.

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}.

---

### BedrockagentcoreGatewayRuleCondition <a name="BedrockagentcoreGatewayRuleCondition" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleCondition;

BedrockagentcoreGatewayRuleCondition.builder()
//  .matchPaths(IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPaths>)
//  .matchPrincipals(IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPrincipals>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition.property.matchPaths">matchPaths</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>></code> | match_paths block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition.property.matchPrincipals">matchPrincipals</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>></code> | match_principals block. |

---

##### `matchPaths`<sup>Optional</sup> <a name="matchPaths" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition.property.matchPaths"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPaths> getMatchPaths();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>>

match_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#match_paths BedrockagentcoreGatewayRule#match_paths}

---

##### `matchPrincipals`<sup>Optional</sup> <a name="matchPrincipals" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition.property.matchPrincipals"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPrincipals> getMatchPrincipals();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>>

match_principals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#match_principals BedrockagentcoreGatewayRule#match_principals}

---

### BedrockagentcoreGatewayRuleConditionMatchPaths <a name="BedrockagentcoreGatewayRuleConditionMatchPaths" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionMatchPaths;

BedrockagentcoreGatewayRuleConditionMatchPaths.builder()
    .anyOf(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths.property.anyOf">anyOf</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}. |

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths.property.anyOf"></a>

```java
public java.util.List<java.lang.String> getAnyOf();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}.

---

### BedrockagentcoreGatewayRuleConditionMatchPrincipals <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipals" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionMatchPrincipals;

BedrockagentcoreGatewayRuleConditionMatchPrincipals.builder()
//  .anyOf(IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals.property.anyOf">anyOf</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>></code> | any_of block. |

---

##### `anyOf`<sup>Optional</sup> <a name="anyOf" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals.property.anyOf"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf> getAnyOf();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>>

any_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}

---

### BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf;

BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf.builder()
//  .iamPrincipal(IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf.property.iamPrincipal">iamPrincipal</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>></code> | iam_principal block. |

---

##### `iamPrincipal`<sup>Optional</sup> <a name="iamPrincipal" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf.property.iamPrincipal"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal> getIamPrincipal();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>>

iam_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#iam_principal BedrockagentcoreGatewayRule#iam_principal}

---

### BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal;

BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal.builder()
    .arn(java.lang.String)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#arn BedrockagentcoreGatewayRule#arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#operator BedrockagentcoreGatewayRule#operator}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#arn BedrockagentcoreGatewayRule#arn}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#operator BedrockagentcoreGatewayRule#operator}.

---

### BedrockagentcoreGatewayRuleConfig <a name="BedrockagentcoreGatewayRuleConfig" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConfig;

BedrockagentcoreGatewayRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gatewayIdentifier(java.lang.String)
    .priority(java.lang.Number)
//  .action(IResolvable|java.util.List<BedrockagentcoreGatewayRuleAction>)
//  .condition(IResolvable|java.util.List<BedrockagentcoreGatewayRuleCondition>)
//  .description(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(BedrockagentcoreGatewayRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.gatewayIdentifier">gatewayIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.action">action</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>></code> | action block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.condition">condition</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>></code> | condition block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gatewayIdentifier`<sup>Required</sup> <a name="gatewayIdentifier" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.gatewayIdentifier"></a>

```java
public java.lang.String getGatewayIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.action"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleAction> getAction();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#action BedrockagentcoreGatewayRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.condition"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleCondition> getCondition();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#condition BedrockagentcoreGatewayRule#condition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#region BedrockagentcoreGatewayRule#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.timeouts"></a>

```java
public BedrockagentcoreGatewayRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#timeouts BedrockagentcoreGatewayRule#timeouts}

---

### BedrockagentcoreGatewayRuleSystem <a name="BedrockagentcoreGatewayRuleSystem" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystem.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleSystem;

BedrockagentcoreGatewayRuleSystem.builder()
    .build();
```


### BedrockagentcoreGatewayRuleTimeouts <a name="BedrockagentcoreGatewayRuleTimeouts" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleTimeouts;

BedrockagentcoreGatewayRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#create BedrockagentcoreGatewayRule#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#delete BedrockagentcoreGatewayRule#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_gateway_rule#update BedrockagentcoreGatewayRule#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreGatewayRuleActionConfigurationBundleList <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionConfigurationBundleList;

new BedrockagentcoreGatewayRuleActionConfigurationBundleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.get"></a>

```java
public BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundle> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>>

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference;

new BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.putStaticOverride">putStaticOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.putWeightedOverride">putWeightedOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.resetStaticOverride">resetStaticOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.resetWeightedOverride">resetWeightedOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStaticOverride` <a name="putStaticOverride" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.putStaticOverride"></a>

```java
public void putStaticOverride(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.putStaticOverride.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>>

---

##### `putWeightedOverride` <a name="putWeightedOverride" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.putWeightedOverride"></a>

```java
public void putWeightedOverride(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.putWeightedOverride.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>>

---

##### `resetStaticOverride` <a name="resetStaticOverride" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.resetStaticOverride"></a>

```java
public void resetStaticOverride()
```

##### `resetWeightedOverride` <a name="resetWeightedOverride" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.resetWeightedOverride"></a>

```java
public void resetWeightedOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.staticOverride">staticOverride</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.weightedOverride">weightedOverride</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.staticOverrideInput">staticOverrideInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.weightedOverrideInput">weightedOverrideInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `staticOverride`<sup>Required</sup> <a name="staticOverride" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.staticOverride"></a>

```java
public BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList getStaticOverride();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList</a>

---

##### `weightedOverride`<sup>Required</sup> <a name="weightedOverride" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.weightedOverride"></a>

```java
public BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList getWeightedOverride();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList</a>

---

##### `staticOverrideInput`<sup>Optional</sup> <a name="staticOverrideInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.staticOverrideInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride> getStaticOverrideInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>>

---

##### `weightedOverrideInput`<sup>Optional</sup> <a name="weightedOverrideInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.weightedOverrideInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride> getWeightedOverrideInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionConfigurationBundle getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList;

new BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.get"></a>

```java
public BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>>

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference;

new BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleArnInput">bundleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleVersionInput">bundleVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleArn">bundleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleVersion">bundleVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bundleArnInput`<sup>Optional</sup> <a name="bundleArnInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleArnInput"></a>

```java
public java.lang.String getBundleArnInput();
```

- *Type:* java.lang.String

---

##### `bundleVersionInput`<sup>Optional</sup> <a name="bundleVersionInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleVersionInput"></a>

```java
public java.lang.String getBundleVersionInput();
```

- *Type:* java.lang.String

---

##### `bundleArn`<sup>Required</sup> <a name="bundleArn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleArn"></a>

```java
public java.lang.String getBundleArn();
```

- *Type:* java.lang.String

---

##### `bundleVersion`<sup>Required</sup> <a name="bundleVersion" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.bundleVersion"></a>

```java
public java.lang.String getBundleVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride</a>

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList;

new BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.get"></a>

```java
public BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>>

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference;

new BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.putTrafficSplit">putTrafficSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.resetTrafficSplit">resetTrafficSplit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrafficSplit` <a name="putTrafficSplit" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.putTrafficSplit"></a>

```java
public void putTrafficSplit(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.putTrafficSplit.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>>

---

##### `resetTrafficSplit` <a name="resetTrafficSplit" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.resetTrafficSplit"></a>

```java
public void resetTrafficSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.trafficSplit">trafficSplit</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.trafficSplitInput">trafficSplitInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trafficSplit`<sup>Required</sup> <a name="trafficSplit" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.trafficSplit"></a>

```java
public BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList getTrafficSplit();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList</a>

---

##### `trafficSplitInput`<sup>Optional</sup> <a name="trafficSplitInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.trafficSplitInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit> getTrafficSplitInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride</a>

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList;

new BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.get"></a>

```java
public BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>>

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference;

new BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArnInput">bundleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersionInput">bundleVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArn">bundleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersion">bundleVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bundleArnInput`<sup>Optional</sup> <a name="bundleArnInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArnInput"></a>

```java
public java.lang.String getBundleArnInput();
```

- *Type:* java.lang.String

---

##### `bundleVersionInput`<sup>Optional</sup> <a name="bundleVersionInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersionInput"></a>

```java
public java.lang.String getBundleVersionInput();
```

- *Type:* java.lang.String

---

##### `bundleArn`<sup>Required</sup> <a name="bundleArn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArn"></a>

```java
public java.lang.String getBundleArn();
```

- *Type:* java.lang.String

---

##### `bundleVersion`<sup>Required</sup> <a name="bundleVersion" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersion"></a>

```java
public java.lang.String getBundleVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList;

new BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.get"></a>

```java
public BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>>

---


### BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference <a name="BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference;

new BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.putConfigurationBundle">putConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetConfigurationBundle">resetConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigurationBundle` <a name="putConfigurationBundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.putConfigurationBundle"></a>

```java
public void putConfigurationBundle(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.putConfigurationBundle.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>>

---

##### `resetConfigurationBundle` <a name="resetConfigurationBundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetConfigurationBundle"></a>

```java
public void resetConfigurationBundle()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundle">configurationBundle</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundleInput">configurationBundleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationBundle`<sup>Required</sup> <a name="configurationBundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundle"></a>

```java
public BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList getConfigurationBundle();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList</a>

---

##### `configurationBundleInput`<sup>Optional</sup> <a name="configurationBundleInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundleInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle> getConfigurationBundleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit</a>

---


### BedrockagentcoreGatewayRuleActionList <a name="BedrockagentcoreGatewayRuleActionList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionList;

new BedrockagentcoreGatewayRuleActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.get"></a>

```java
public BedrockagentcoreGatewayRuleActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleAction> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>>

---


### BedrockagentcoreGatewayRuleActionOutputReference <a name="BedrockagentcoreGatewayRuleActionOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionOutputReference;

new BedrockagentcoreGatewayRuleActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.putConfigurationBundle">putConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.putRouteToTarget">putRouteToTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.resetConfigurationBundle">resetConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.resetRouteToTarget">resetRouteToTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigurationBundle` <a name="putConfigurationBundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.putConfigurationBundle"></a>

```java
public void putConfigurationBundle(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundle> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.putConfigurationBundle.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>>

---

##### `putRouteToTarget` <a name="putRouteToTarget" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.putRouteToTarget"></a>

```java
public void putRouteToTarget(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.putRouteToTarget.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>>

---

##### `resetConfigurationBundle` <a name="resetConfigurationBundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.resetConfigurationBundle"></a>

```java
public void resetConfigurationBundle()
```

##### `resetRouteToTarget` <a name="resetRouteToTarget" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.resetRouteToTarget"></a>

```java
public void resetRouteToTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.configurationBundle">configurationBundle</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList">BedrockagentcoreGatewayRuleActionConfigurationBundleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.routeToTarget">routeToTarget</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList">BedrockagentcoreGatewayRuleActionRouteToTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.configurationBundleInput">configurationBundleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.routeToTargetInput">routeToTargetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationBundle`<sup>Required</sup> <a name="configurationBundle" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.configurationBundle"></a>

```java
public BedrockagentcoreGatewayRuleActionConfigurationBundleList getConfigurationBundle();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundleList">BedrockagentcoreGatewayRuleActionConfigurationBundleList</a>

---

##### `routeToTarget`<sup>Required</sup> <a name="routeToTarget" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.routeToTarget"></a>

```java
public BedrockagentcoreGatewayRuleActionRouteToTargetList getRouteToTarget();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList">BedrockagentcoreGatewayRuleActionRouteToTargetList</a>

---

##### `configurationBundleInput`<sup>Optional</sup> <a name="configurationBundleInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.configurationBundleInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionConfigurationBundle> getConfigurationBundleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionConfigurationBundle">BedrockagentcoreGatewayRuleActionConfigurationBundle</a>>

---

##### `routeToTargetInput`<sup>Optional</sup> <a name="routeToTargetInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.routeToTargetInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTarget> getRouteToTargetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleAction">BedrockagentcoreGatewayRuleAction</a>

---


### BedrockagentcoreGatewayRuleActionRouteToTargetList <a name="BedrockagentcoreGatewayRuleActionRouteToTargetList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionRouteToTargetList;

new BedrockagentcoreGatewayRuleActionRouteToTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.get"></a>

```java
public BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTarget> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>>

---


### BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference <a name="BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference;

new BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.putStaticRoute">putStaticRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.putWeightedRoute">putWeightedRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.resetStaticRoute">resetStaticRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.resetWeightedRoute">resetWeightedRoute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStaticRoute` <a name="putStaticRoute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.putStaticRoute"></a>

```java
public void putStaticRoute(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.putStaticRoute.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>>

---

##### `putWeightedRoute` <a name="putWeightedRoute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.putWeightedRoute"></a>

```java
public void putWeightedRoute(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.putWeightedRoute.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>>

---

##### `resetStaticRoute` <a name="resetStaticRoute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.resetStaticRoute"></a>

```java
public void resetStaticRoute()
```

##### `resetWeightedRoute` <a name="resetWeightedRoute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.resetWeightedRoute"></a>

```java
public void resetWeightedRoute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.staticRoute">staticRoute</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.weightedRoute">weightedRoute</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.staticRouteInput">staticRouteInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.weightedRouteInput">weightedRouteInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `staticRoute`<sup>Required</sup> <a name="staticRoute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.staticRoute"></a>

```java
public BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList getStaticRoute();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList</a>

---

##### `weightedRoute`<sup>Required</sup> <a name="weightedRoute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.weightedRoute"></a>

```java
public BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList getWeightedRoute();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList</a>

---

##### `staticRouteInput`<sup>Optional</sup> <a name="staticRouteInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.staticRouteInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute> getStaticRouteInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>>

---

##### `weightedRouteInput`<sup>Optional</sup> <a name="weightedRouteInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.weightedRouteInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute> getWeightedRouteInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionRouteToTarget getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTarget">BedrockagentcoreGatewayRuleActionRouteToTarget</a>

---


### BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList <a name="BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList;

new BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.get"></a>

```java
public BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>>

---


### BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference <a name="BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference;

new BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.targetNameInput">targetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.targetName">targetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetNameInput`<sup>Optional</sup> <a name="targetNameInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.targetNameInput"></a>

```java
public java.lang.String getTargetNameInput();
```

- *Type:* java.lang.String

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute</a>

---


### BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList <a name="BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList;

new BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.get"></a>

```java
public BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>>

---


### BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference <a name="BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference;

new BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.putTrafficSplit">putTrafficSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.resetTrafficSplit">resetTrafficSplit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrafficSplit` <a name="putTrafficSplit" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.putTrafficSplit"></a>

```java
public void putTrafficSplit(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.putTrafficSplit.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>>

---

##### `resetTrafficSplit` <a name="resetTrafficSplit" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.resetTrafficSplit"></a>

```java
public void resetTrafficSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.trafficSplit">trafficSplit</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.trafficSplitInput">trafficSplitInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trafficSplit`<sup>Required</sup> <a name="trafficSplit" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.trafficSplit"></a>

```java
public BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList getTrafficSplit();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList</a>

---

##### `trafficSplitInput`<sup>Optional</sup> <a name="trafficSplitInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.trafficSplitInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit> getTrafficSplitInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute</a>

---


### BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList <a name="BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList;

new BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.get"></a>

```java
public BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>>

---


### BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference <a name="BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference;

new BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetNameInput">targetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetName">targetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `targetNameInput`<sup>Optional</sup> <a name="targetNameInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetNameInput"></a>

```java
public java.lang.String getTargetNameInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit</a>

---


### BedrockagentcoreGatewayRuleConditionList <a name="BedrockagentcoreGatewayRuleConditionList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionList;

new BedrockagentcoreGatewayRuleConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.get"></a>

```java
public BedrockagentcoreGatewayRuleConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleCondition> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>>

---


### BedrockagentcoreGatewayRuleConditionMatchPathsList <a name="BedrockagentcoreGatewayRuleConditionMatchPathsList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionMatchPathsList;

new BedrockagentcoreGatewayRuleConditionMatchPathsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.get"></a>

```java
public BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPaths> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>>

---


### BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference <a name="BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference;

new BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.anyOfInput">anyOfInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.anyOf">anyOf</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anyOfInput`<sup>Optional</sup> <a name="anyOfInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.anyOfInput"></a>

```java
public java.util.List<java.lang.String> getAnyOfInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.anyOf"></a>

```java
public java.util.List<java.lang.String> getAnyOf();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleConditionMatchPaths getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>

---


### BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList;

new BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.get"></a>

```java
public BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>>

---


### BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference;

new BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>

---


### BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList;

new BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.get"></a>

```java
public BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>>

---


### BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference;

new BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.putIamPrincipal">putIamPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.resetIamPrincipal">resetIamPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIamPrincipal` <a name="putIamPrincipal" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.putIamPrincipal"></a>

```java
public void putIamPrincipal(IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.putIamPrincipal.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>>

---

##### `resetIamPrincipal` <a name="resetIamPrincipal" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.resetIamPrincipal"></a>

```java
public void resetIamPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.iamPrincipal">iamPrincipal</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.iamPrincipalInput">iamPrincipalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iamPrincipal`<sup>Required</sup> <a name="iamPrincipal" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.iamPrincipal"></a>

```java
public BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList getIamPrincipal();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList</a>

---

##### `iamPrincipalInput`<sup>Optional</sup> <a name="iamPrincipalInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.iamPrincipalInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal> getIamPrincipalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>

---


### BedrockagentcoreGatewayRuleConditionMatchPrincipalsList <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList;

new BedrockagentcoreGatewayRuleConditionMatchPrincipalsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.get"></a>

```java
public BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPrincipals> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>>

---


### BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference <a name="BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference;

new BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.putAnyOf">putAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.resetAnyOf">resetAnyOf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnyOf` <a name="putAnyOf" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.putAnyOf"></a>

```java
public void putAnyOf(IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.putAnyOf.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>>

---

##### `resetAnyOf` <a name="resetAnyOf" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.resetAnyOf"></a>

```java
public void resetAnyOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.anyOf">anyOf</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.anyOfInput">anyOfInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.anyOf"></a>

```java
public BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList getAnyOf();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList</a>

---

##### `anyOfInput`<sup>Optional</sup> <a name="anyOfInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.anyOfInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf> getAnyOfInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleConditionMatchPrincipals getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>

---


### BedrockagentcoreGatewayRuleConditionOutputReference <a name="BedrockagentcoreGatewayRuleConditionOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionOutputReference;

new BedrockagentcoreGatewayRuleConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.putMatchPaths">putMatchPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.putMatchPrincipals">putMatchPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.resetMatchPaths">resetMatchPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.resetMatchPrincipals">resetMatchPrincipals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchPaths` <a name="putMatchPaths" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.putMatchPaths"></a>

```java
public void putMatchPaths(IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPaths> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.putMatchPaths.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>>

---

##### `putMatchPrincipals` <a name="putMatchPrincipals" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.putMatchPrincipals"></a>

```java
public void putMatchPrincipals(IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPrincipals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.putMatchPrincipals.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>>

---

##### `resetMatchPaths` <a name="resetMatchPaths" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.resetMatchPaths"></a>

```java
public void resetMatchPaths()
```

##### `resetMatchPrincipals` <a name="resetMatchPrincipals" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.resetMatchPrincipals"></a>

```java
public void resetMatchPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPaths">matchPaths</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList">BedrockagentcoreGatewayRuleConditionMatchPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPrincipals">matchPrincipals</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList">BedrockagentcoreGatewayRuleConditionMatchPrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPathsInput">matchPathsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPrincipalsInput">matchPrincipalsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchPaths`<sup>Required</sup> <a name="matchPaths" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPaths"></a>

```java
public BedrockagentcoreGatewayRuleConditionMatchPathsList getMatchPaths();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPathsList">BedrockagentcoreGatewayRuleConditionMatchPathsList</a>

---

##### `matchPrincipals`<sup>Required</sup> <a name="matchPrincipals" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPrincipals"></a>

```java
public BedrockagentcoreGatewayRuleConditionMatchPrincipalsList getMatchPrincipals();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipalsList">BedrockagentcoreGatewayRuleConditionMatchPrincipalsList</a>

---

##### `matchPathsInput`<sup>Optional</sup> <a name="matchPathsInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPathsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPaths> getMatchPathsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPaths">BedrockagentcoreGatewayRuleConditionMatchPaths</a>>

---

##### `matchPrincipalsInput`<sup>Optional</sup> <a name="matchPrincipalsInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.matchPrincipalsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionMatchPrincipals> getMatchPrincipalsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionMatchPrincipals">BedrockagentcoreGatewayRuleConditionMatchPrincipals</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleCondition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleCondition">BedrockagentcoreGatewayRuleCondition</a>

---


### BedrockagentcoreGatewayRuleSystemList <a name="BedrockagentcoreGatewayRuleSystemList" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleSystemList;

new BedrockagentcoreGatewayRuleSystemList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.get"></a>

```java
public BedrockagentcoreGatewayRuleSystemOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockagentcoreGatewayRuleSystemOutputReference <a name="BedrockagentcoreGatewayRuleSystemOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleSystemOutputReference;

new BedrockagentcoreGatewayRuleSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.managedBy">managedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystem">BedrockagentcoreGatewayRuleSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedBy`<sup>Required</sup> <a name="managedBy" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.managedBy"></a>

```java
public java.lang.String getManagedBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.internalValue"></a>

```java
public BedrockagentcoreGatewayRuleSystem getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystem">BedrockagentcoreGatewayRuleSystem</a>

---


### BedrockagentcoreGatewayRuleTimeoutsOutputReference <a name="BedrockagentcoreGatewayRuleTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleTimeoutsOutputReference;

new BedrockagentcoreGatewayRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleTimeouts">BedrockagentcoreGatewayRuleTimeouts</a>

---



