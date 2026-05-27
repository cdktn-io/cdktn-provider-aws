# `observabilityadminTelemetryRule` Submodule <a name="`observabilityadminTelemetryRule` Submodule" id="@cdktn/provider-aws.observabilityadminTelemetryRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminTelemetryRule <a name="ObservabilityadminTelemetryRule" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule aws_observabilityadmin_telemetry_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer"></a>

```java
import io.cdktn.providers.aws.observabilityadmin_telemetry_rule.ObservabilityadminTelemetryRule;

ObservabilityadminTelemetryRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ruleName(java.lang.String)
//  .region(java.lang.String)
//  .rule(IResolvable|java.util.List<ObservabilityadminTelemetryRuleRule>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ObservabilityadminTelemetryRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#rule_name ObservabilityadminTelemetryRule#rule_name}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>></code> | rule block. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#tags ObservabilityadminTelemetryRule#tags}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.ruleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#rule_name ObservabilityadminTelemetryRule#rule_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#region ObservabilityadminTelemetryRule#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.rule"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#rule ObservabilityadminTelemetryRule#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#tags ObservabilityadminTelemetryRule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#timeouts ObservabilityadminTelemetryRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putRule"></a>

```java
public void putRule(IResolvable|java.util.List<ObservabilityadminTelemetryRuleRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putTimeouts"></a>

```java
public void putTimeouts(ObservabilityadminTelemetryRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRule` <a name="resetRule" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetRule"></a>

```java
public void resetRule()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityadminTelemetryRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isConstruct"></a>

```java
import io.cdktn.providers.aws.observabilityadmin_telemetry_rule.ObservabilityadminTelemetryRule;

ObservabilityadminTelemetryRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.observabilityadmin_telemetry_rule.ObservabilityadminTelemetryRule;

ObservabilityadminTelemetryRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.observabilityadmin_telemetry_rule.ObservabilityadminTelemetryRule;

ObservabilityadminTelemetryRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.observabilityadmin_telemetry_rule.ObservabilityadminTelemetryRule;

ObservabilityadminTelemetryRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ObservabilityadminTelemetryRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ObservabilityadminTelemetryRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ObservabilityadminTelemetryRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ObservabilityadminTelemetryRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminTelemetryRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList">ObservabilityadminTelemetryRuleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleArn">ruleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference">ObservabilityadminTelemetryRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleInput">ruleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.rule"></a>

```java
public ObservabilityadminTelemetryRuleRuleList getRule();
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList">ObservabilityadminTelemetryRuleRuleList</a>

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleArn"></a>

```java
public java.lang.String getRuleArn();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.timeouts"></a>

```java
public ObservabilityadminTelemetryRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference">ObservabilityadminTelemetryRuleTimeoutsOutputReference</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleInput"></a>

```java
public IResolvable|java.util.List<ObservabilityadminTelemetryRuleRule> getRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>>

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.timeoutsInput"></a>

```java
public IResolvable|ObservabilityadminTelemetryRuleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminTelemetryRuleConfig <a name="ObservabilityadminTelemetryRuleConfig" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.observabilityadmin_telemetry_rule.ObservabilityadminTelemetryRuleConfig;

ObservabilityadminTelemetryRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ruleName(java.lang.String)
//  .region(java.lang.String)
//  .rule(IResolvable|java.util.List<ObservabilityadminTelemetryRuleRule>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ObservabilityadminTelemetryRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#rule_name ObservabilityadminTelemetryRule#rule_name}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>></code> | rule block. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#tags ObservabilityadminTelemetryRule#tags}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#rule_name ObservabilityadminTelemetryRule#rule_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#region ObservabilityadminTelemetryRule#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.rule"></a>

```java
public IResolvable|java.util.List<ObservabilityadminTelemetryRuleRule> getRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#rule ObservabilityadminTelemetryRule#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#tags ObservabilityadminTelemetryRule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.timeouts"></a>

```java
public ObservabilityadminTelemetryRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#timeouts ObservabilityadminTelemetryRule#timeouts}

---

### ObservabilityadminTelemetryRuleRule <a name="ObservabilityadminTelemetryRuleRule" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.Initializer"></a>

```java
import io.cdktn.providers.aws.observabilityadmin_telemetry_rule.ObservabilityadminTelemetryRuleRule;

ObservabilityadminTelemetryRuleRule.builder()
    .telemetryType(java.lang.String)
//  .resourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.telemetryType">telemetryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#telemetry_type ObservabilityadminTelemetryRule#telemetry_type}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#resource_type ObservabilityadminTelemetryRule#resource_type}. |

---

##### `telemetryType`<sup>Required</sup> <a name="telemetryType" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.telemetryType"></a>

```java
public java.lang.String getTelemetryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#telemetry_type ObservabilityadminTelemetryRule#telemetry_type}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#resource_type ObservabilityadminTelemetryRule#resource_type}.

---

### ObservabilityadminTelemetryRuleTimeouts <a name="ObservabilityadminTelemetryRuleTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.observabilityadmin_telemetry_rule.ObservabilityadminTelemetryRuleTimeouts;

ObservabilityadminTelemetryRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#create ObservabilityadminTelemetryRule#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#delete ObservabilityadminTelemetryRule#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_rule#update ObservabilityadminTelemetryRule#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminTelemetryRuleRuleList <a name="ObservabilityadminTelemetryRuleRuleList" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.Initializer"></a>

```java
import io.cdktn.providers.aws.observabilityadmin_telemetry_rule.ObservabilityadminTelemetryRuleRuleList;

new ObservabilityadminTelemetryRuleRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.get"></a>

```java
public ObservabilityadminTelemetryRuleRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ObservabilityadminTelemetryRuleRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>>

---


### ObservabilityadminTelemetryRuleRuleOutputReference <a name="ObservabilityadminTelemetryRuleRuleOutputReference" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.observabilityadmin_telemetry_rule.ObservabilityadminTelemetryRuleRuleOutputReference;

new ObservabilityadminTelemetryRuleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetryTypeInput">telemetryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetryType">telemetryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `telemetryTypeInput`<sup>Optional</sup> <a name="telemetryTypeInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetryTypeInput"></a>

```java
public java.lang.String getTelemetryTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `telemetryType`<sup>Required</sup> <a name="telemetryType" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetryType"></a>

```java
public java.lang.String getTelemetryType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|ObservabilityadminTelemetryRuleRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>

---


### ObservabilityadminTelemetryRuleTimeoutsOutputReference <a name="ObservabilityadminTelemetryRuleTimeoutsOutputReference" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.observabilityadmin_telemetry_rule.ObservabilityadminTelemetryRuleTimeoutsOutputReference;

new ObservabilityadminTelemetryRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ObservabilityadminTelemetryRuleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a>

---



