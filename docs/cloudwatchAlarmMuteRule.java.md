# `cloudwatchAlarmMuteRule` Submodule <a name="`cloudwatchAlarmMuteRule` Submodule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAlarmMuteRule <a name="CloudwatchAlarmMuteRule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule aws_cloudwatch_alarm_mute_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_alarm_mute_rule.CloudwatchAlarmMuteRule;

CloudwatchAlarmMuteRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .expireDate(java.lang.String)
//  .muteTargets(IResolvable|java.util.List<CloudwatchAlarmMuteRuleMuteTargets>)
//  .region(java.lang.String)
//  .rule(IResolvable|java.util.List<CloudwatchAlarmMuteRuleRule>)
//  .startDate(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#name CloudwatchAlarmMuteRule#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#description CloudwatchAlarmMuteRule#description}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.expireDate">expireDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#expire_date CloudwatchAlarmMuteRule#expire_date}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.muteTargets">muteTargets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>></code> | mute_targets block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>></code> | rule block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.startDate">startDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#start_date CloudwatchAlarmMuteRule#start_date}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#tags CloudwatchAlarmMuteRule#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#name CloudwatchAlarmMuteRule#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#description CloudwatchAlarmMuteRule#description}.

---

##### `expireDate`<sup>Optional</sup> <a name="expireDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.expireDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#expire_date CloudwatchAlarmMuteRule#expire_date}.

---

##### `muteTargets`<sup>Optional</sup> <a name="muteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.muteTargets"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>>

mute_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#mute_targets CloudwatchAlarmMuteRule#mute_targets}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#region CloudwatchAlarmMuteRule#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.rule"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#rule CloudwatchAlarmMuteRule#rule}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.startDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#start_date CloudwatchAlarmMuteRule#start_date}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#tags CloudwatchAlarmMuteRule#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putMuteTargets">putMuteTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetExpireDate">resetExpireDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetMuteTargets">resetMuteTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMuteTargets` <a name="putMuteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putMuteTargets"></a>

```java
public void putMuteTargets(IResolvable|java.util.List<CloudwatchAlarmMuteRuleMuteTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putMuteTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>>

---

##### `putRule` <a name="putRule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putRule"></a>

```java
public void putRule(IResolvable|java.util.List<CloudwatchAlarmMuteRuleRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpireDate` <a name="resetExpireDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetExpireDate"></a>

```java
public void resetExpireDate()
```

##### `resetMuteTargets` <a name="resetMuteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetMuteTargets"></a>

```java
public void resetMuteTargets()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRule` <a name="resetRule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetRule"></a>

```java
public void resetRule()
```

##### `resetStartDate` <a name="resetStartDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetStartDate"></a>

```java
public void resetStartDate()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct"></a>

```java
import io.cdktn.providers.aws.cloudwatch_alarm_mute_rule.CloudwatchAlarmMuteRule;

CloudwatchAlarmMuteRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.cloudwatch_alarm_mute_rule.CloudwatchAlarmMuteRule;

CloudwatchAlarmMuteRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.cloudwatch_alarm_mute_rule.CloudwatchAlarmMuteRule;

CloudwatchAlarmMuteRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.cloudwatch_alarm_mute_rule.CloudwatchAlarmMuteRule;

CloudwatchAlarmMuteRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudwatchAlarmMuteRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudwatchAlarmMuteRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudwatchAlarmMuteRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAlarmMuteRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargets">muteTargets</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList">CloudwatchAlarmMuteRuleMuteTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteType">muteType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList">CloudwatchAlarmMuteRuleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDateInput">expireDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargetsInput">muteTargetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.ruleInput">ruleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDateInput">startDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDate">expireDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lastUpdatedTimestamp"></a>

```java
public java.lang.String getLastUpdatedTimestamp();
```

- *Type:* java.lang.String

---

##### `muteTargets`<sup>Required</sup> <a name="muteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargets"></a>

```java
public CloudwatchAlarmMuteRuleMuteTargetsList getMuteTargets();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList">CloudwatchAlarmMuteRuleMuteTargetsList</a>

---

##### `muteType`<sup>Required</sup> <a name="muteType" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteType"></a>

```java
public java.lang.String getMuteType();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.rule"></a>

```java
public CloudwatchAlarmMuteRuleRuleList getRule();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList">CloudwatchAlarmMuteRuleRuleList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expireDateInput`<sup>Optional</sup> <a name="expireDateInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDateInput"></a>

```java
public java.lang.String getExpireDateInput();
```

- *Type:* java.lang.String

---

##### `muteTargetsInput`<sup>Optional</sup> <a name="muteTargetsInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargetsInput"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmMuteRuleMuteTargets> getMuteTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.ruleInput"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmMuteRuleRule> getRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>>

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDateInput"></a>

```java
public java.lang.String getStartDateInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expireDate`<sup>Required</sup> <a name="expireDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDate"></a>

```java
public java.lang.String getExpireDate();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAlarmMuteRuleConfig <a name="CloudwatchAlarmMuteRuleConfig" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_alarm_mute_rule.CloudwatchAlarmMuteRuleConfig;

CloudwatchAlarmMuteRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .expireDate(java.lang.String)
//  .muteTargets(IResolvable|java.util.List<CloudwatchAlarmMuteRuleMuteTargets>)
//  .region(java.lang.String)
//  .rule(IResolvable|java.util.List<CloudwatchAlarmMuteRuleRule>)
//  .startDate(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#name CloudwatchAlarmMuteRule#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#description CloudwatchAlarmMuteRule#description}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.expireDate">expireDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#expire_date CloudwatchAlarmMuteRule#expire_date}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.muteTargets">muteTargets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>></code> | mute_targets block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>></code> | rule block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.startDate">startDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#start_date CloudwatchAlarmMuteRule#start_date}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#tags CloudwatchAlarmMuteRule#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#name CloudwatchAlarmMuteRule#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#description CloudwatchAlarmMuteRule#description}.

---

##### `expireDate`<sup>Optional</sup> <a name="expireDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.expireDate"></a>

```java
public java.lang.String getExpireDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#expire_date CloudwatchAlarmMuteRule#expire_date}.

---

##### `muteTargets`<sup>Optional</sup> <a name="muteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.muteTargets"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmMuteRuleMuteTargets> getMuteTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>>

mute_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#mute_targets CloudwatchAlarmMuteRule#mute_targets}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#region CloudwatchAlarmMuteRule#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.rule"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmMuteRuleRule> getRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#rule CloudwatchAlarmMuteRule#rule}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#start_date CloudwatchAlarmMuteRule#start_date}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#tags CloudwatchAlarmMuteRule#tags}.

---

### CloudwatchAlarmMuteRuleMuteTargets <a name="CloudwatchAlarmMuteRuleMuteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_alarm_mute_rule.CloudwatchAlarmMuteRuleMuteTargets;

CloudwatchAlarmMuteRuleMuteTargets.builder()
    .alarmNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets.property.alarmNames">alarmNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#alarm_names CloudwatchAlarmMuteRule#alarm_names}. |

---

##### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets.property.alarmNames"></a>

```java
public java.util.List<java.lang.String> getAlarmNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#alarm_names CloudwatchAlarmMuteRule#alarm_names}.

---

### CloudwatchAlarmMuteRuleRule <a name="CloudwatchAlarmMuteRuleRule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_alarm_mute_rule.CloudwatchAlarmMuteRuleRule;

CloudwatchAlarmMuteRuleRule.builder()
//  .schedule(IResolvable|java.util.List<CloudwatchAlarmMuteRuleRuleSchedule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule.property.schedule">schedule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>></code> | schedule block. |

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule.property.schedule"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmMuteRuleRuleSchedule> getSchedule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#schedule CloudwatchAlarmMuteRule#schedule}

---

### CloudwatchAlarmMuteRuleRuleSchedule <a name="CloudwatchAlarmMuteRuleRuleSchedule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_alarm_mute_rule.CloudwatchAlarmMuteRuleRuleSchedule;

CloudwatchAlarmMuteRuleRuleSchedule.builder()
    .duration(java.lang.String)
    .expression(java.lang.String)
//  .timezone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#duration CloudwatchAlarmMuteRule#duration}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#expression CloudwatchAlarmMuteRule#expression}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#timezone CloudwatchAlarmMuteRule#timezone}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#duration CloudwatchAlarmMuteRule#duration}.

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#expression CloudwatchAlarmMuteRule#expression}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudwatch_alarm_mute_rule#timezone CloudwatchAlarmMuteRule#timezone}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAlarmMuteRuleMuteTargetsList <a name="CloudwatchAlarmMuteRuleMuteTargetsList" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_alarm_mute_rule.CloudwatchAlarmMuteRuleMuteTargetsList;

new CloudwatchAlarmMuteRuleMuteTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.get"></a>

```java
public CloudwatchAlarmMuteRuleMuteTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmMuteRuleMuteTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>>

---


### CloudwatchAlarmMuteRuleMuteTargetsOutputReference <a name="CloudwatchAlarmMuteRuleMuteTargetsOutputReference" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_alarm_mute_rule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference;

new CloudwatchAlarmMuteRuleMuteTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNamesInput">alarmNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames">alarmNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmNamesInput`<sup>Optional</sup> <a name="alarmNamesInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNamesInput"></a>

```java
public java.util.List<java.lang.String> getAlarmNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames"></a>

```java
public java.util.List<java.lang.String> getAlarmNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlarmMuteRuleMuteTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>

---


### CloudwatchAlarmMuteRuleRuleList <a name="CloudwatchAlarmMuteRuleRuleList" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_alarm_mute_rule.CloudwatchAlarmMuteRuleRuleList;

new CloudwatchAlarmMuteRuleRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.get"></a>

```java
public CloudwatchAlarmMuteRuleRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmMuteRuleRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>>

---


### CloudwatchAlarmMuteRuleRuleOutputReference <a name="CloudwatchAlarmMuteRuleRuleOutputReference" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_alarm_mute_rule.CloudwatchAlarmMuteRuleRuleOutputReference;

new CloudwatchAlarmMuteRuleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule"></a>

```java
public void putSchedule(IResolvable|java.util.List<CloudwatchAlarmMuteRuleRuleSchedule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>>

---

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resetSchedule"></a>

```java
public void resetSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList">CloudwatchAlarmMuteRuleRuleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.schedule"></a>

```java
public CloudwatchAlarmMuteRuleRuleScheduleList getSchedule();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList">CloudwatchAlarmMuteRuleRuleScheduleList</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.scheduleInput"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmMuteRuleRuleSchedule> getScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlarmMuteRuleRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>

---


### CloudwatchAlarmMuteRuleRuleScheduleList <a name="CloudwatchAlarmMuteRuleRuleScheduleList" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_alarm_mute_rule.CloudwatchAlarmMuteRuleRuleScheduleList;

new CloudwatchAlarmMuteRuleRuleScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.get"></a>

```java
public CloudwatchAlarmMuteRuleRuleScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmMuteRuleRuleSchedule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>>

---


### CloudwatchAlarmMuteRuleRuleScheduleOutputReference <a name="CloudwatchAlarmMuteRuleRuleScheduleOutputReference" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_alarm_mute_rule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference;

new CloudwatchAlarmMuteRuleRuleScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resetTimezone"></a>

```java
public void resetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlarmMuteRuleRuleSchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>

---



