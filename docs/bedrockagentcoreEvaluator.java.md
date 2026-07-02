# `bedrockagentcoreEvaluator` Submodule <a name="`bedrockagentcoreEvaluator` Submodule" id="@cdktn/provider-aws.bedrockagentcoreEvaluator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreEvaluator <a name="BedrockagentcoreEvaluator" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator aws_bedrockagentcore_evaluator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluator;

BedrockagentcoreEvaluator.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .evaluatorName(java.lang.String)
    .level(java.lang.String)
//  .description(java.lang.String)
//  .evaluatorConfig(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfig>)
//  .kmsKeyArn(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BedrockagentcoreEvaluatorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.evaluatorName">evaluatorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#evaluator_name BedrockagentcoreEvaluator#evaluator_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#level BedrockagentcoreEvaluator#level}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#description BedrockagentcoreEvaluator#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.evaluatorConfig">evaluatorConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig">BedrockagentcoreEvaluatorEvaluatorConfig</a>></code> | evaluator_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#kms_key_arn BedrockagentcoreEvaluator#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#tags BedrockagentcoreEvaluator#tags}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts">BedrockagentcoreEvaluatorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `evaluatorName`<sup>Required</sup> <a name="evaluatorName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.evaluatorName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#evaluator_name BedrockagentcoreEvaluator#evaluator_name}.

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.level"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#level BedrockagentcoreEvaluator#level}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#description BedrockagentcoreEvaluator#description}.

---

##### `evaluatorConfig`<sup>Optional</sup> <a name="evaluatorConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.evaluatorConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig">BedrockagentcoreEvaluatorEvaluatorConfig</a>>

evaluator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#evaluator_config BedrockagentcoreEvaluator#evaluator_config}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#kms_key_arn BedrockagentcoreEvaluator#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#region BedrockagentcoreEvaluator#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#tags BedrockagentcoreEvaluator#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts">BedrockagentcoreEvaluatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#timeouts BedrockagentcoreEvaluator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.putEvaluatorConfig">putEvaluatorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetEvaluatorConfig">resetEvaluatorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEvaluatorConfig` <a name="putEvaluatorConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.putEvaluatorConfig"></a>

```java
public void putEvaluatorConfig(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.putEvaluatorConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig">BedrockagentcoreEvaluatorEvaluatorConfig</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.putTimeouts"></a>

```java
public void putTimeouts(BedrockagentcoreEvaluatorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts">BedrockagentcoreEvaluatorTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEvaluatorConfig` <a name="resetEvaluatorConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetEvaluatorConfig"></a>

```java
public void resetEvaluatorConfig()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreEvaluator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isConstruct"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluator;

BedrockagentcoreEvaluator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluator;

BedrockagentcoreEvaluator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluator;

BedrockagentcoreEvaluator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluator;

BedrockagentcoreEvaluator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcoreEvaluator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockagentcoreEvaluator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcoreEvaluator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcoreEvaluator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreEvaluator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorArn">evaluatorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorConfig">evaluatorConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList">BedrockagentcoreEvaluatorEvaluatorConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorId">evaluatorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.lockedForModification">lockedForModification</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference">BedrockagentcoreEvaluatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorConfigInput">evaluatorConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig">BedrockagentcoreEvaluatorEvaluatorConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorNameInput">evaluatorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts">BedrockagentcoreEvaluatorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorName">evaluatorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `evaluatorArn`<sup>Required</sup> <a name="evaluatorArn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorArn"></a>

```java
public java.lang.String getEvaluatorArn();
```

- *Type:* java.lang.String

---

##### `evaluatorConfig`<sup>Required</sup> <a name="evaluatorConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorConfig"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigList getEvaluatorConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList">BedrockagentcoreEvaluatorEvaluatorConfigList</a>

---

##### `evaluatorId`<sup>Required</sup> <a name="evaluatorId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorId"></a>

```java
public java.lang.String getEvaluatorId();
```

- *Type:* java.lang.String

---

##### `lockedForModification`<sup>Required</sup> <a name="lockedForModification" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.lockedForModification"></a>

```java
public IResolvable getLockedForModification();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.timeouts"></a>

```java
public BedrockagentcoreEvaluatorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference">BedrockagentcoreEvaluatorTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `evaluatorConfigInput`<sup>Optional</sup> <a name="evaluatorConfigInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorConfigInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfig> getEvaluatorConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig">BedrockagentcoreEvaluatorEvaluatorConfig</a>>

---

##### `evaluatorNameInput`<sup>Optional</sup> <a name="evaluatorNameInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorNameInput"></a>

```java
public java.lang.String getEvaluatorNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.timeoutsInput"></a>

```java
public IResolvable|BedrockagentcoreEvaluatorTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts">BedrockagentcoreEvaluatorTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `evaluatorName`<sup>Required</sup> <a name="evaluatorName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorName"></a>

```java
public java.lang.String getEvaluatorName();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreEvaluatorConfig <a name="BedrockagentcoreEvaluatorConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorConfig;

BedrockagentcoreEvaluatorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .evaluatorName(java.lang.String)
    .level(java.lang.String)
//  .description(java.lang.String)
//  .evaluatorConfig(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfig>)
//  .kmsKeyArn(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BedrockagentcoreEvaluatorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.evaluatorName">evaluatorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#evaluator_name BedrockagentcoreEvaluator#evaluator_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#level BedrockagentcoreEvaluator#level}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#description BedrockagentcoreEvaluator#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.evaluatorConfig">evaluatorConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig">BedrockagentcoreEvaluatorEvaluatorConfig</a>></code> | evaluator_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#kms_key_arn BedrockagentcoreEvaluator#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#tags BedrockagentcoreEvaluator#tags}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts">BedrockagentcoreEvaluatorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `evaluatorName`<sup>Required</sup> <a name="evaluatorName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.evaluatorName"></a>

```java
public java.lang.String getEvaluatorName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#evaluator_name BedrockagentcoreEvaluator#evaluator_name}.

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#level BedrockagentcoreEvaluator#level}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#description BedrockagentcoreEvaluator#description}.

---

##### `evaluatorConfig`<sup>Optional</sup> <a name="evaluatorConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.evaluatorConfig"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfig> getEvaluatorConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig">BedrockagentcoreEvaluatorEvaluatorConfig</a>>

evaluator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#evaluator_config BedrockagentcoreEvaluator#evaluator_config}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#kms_key_arn BedrockagentcoreEvaluator#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#region BedrockagentcoreEvaluator#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#tags BedrockagentcoreEvaluator#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.timeouts"></a>

```java
public BedrockagentcoreEvaluatorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts">BedrockagentcoreEvaluatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#timeouts BedrockagentcoreEvaluator#timeouts}

---

### BedrockagentcoreEvaluatorEvaluatorConfig <a name="BedrockagentcoreEvaluatorEvaluatorConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfig;

BedrockagentcoreEvaluatorEvaluatorConfig.builder()
//  .codeBased(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigCodeBased>)
//  .llmAsAJudge(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig.property.codeBased">codeBased</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased">BedrockagentcoreEvaluatorEvaluatorConfigCodeBased</a>></code> | code_based block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig.property.llmAsAJudge">llmAsAJudge</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge</a>></code> | llm_as_a_judge block. |

---

##### `codeBased`<sup>Optional</sup> <a name="codeBased" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig.property.codeBased"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigCodeBased> getCodeBased();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased">BedrockagentcoreEvaluatorEvaluatorConfigCodeBased</a>>

code_based block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#code_based BedrockagentcoreEvaluator#code_based}

---

##### `llmAsAJudge`<sup>Optional</sup> <a name="llmAsAJudge" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig.property.llmAsAJudge"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge> getLlmAsAJudge();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge</a>>

llm_as_a_judge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#llm_as_a_judge BedrockagentcoreEvaluator#llm_as_a_judge}

---

### BedrockagentcoreEvaluatorEvaluatorConfigCodeBased <a name="BedrockagentcoreEvaluatorEvaluatorConfigCodeBased" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased;

BedrockagentcoreEvaluatorEvaluatorConfigCodeBased.builder()
//  .lambdaConfig(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased.property.lambdaConfig">lambdaConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig</a>></code> | lambda_config block. |

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased.property.lambdaConfig"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig> getLambdaConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig</a>>

lambda_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#lambda_config BedrockagentcoreEvaluator#lambda_config}

---

### BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig <a name="BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig;

BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig.builder()
    .lambdaArn(java.lang.String)
//  .lambdaTimeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#lambda_arn BedrockagentcoreEvaluator#lambda_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig.property.lambdaTimeoutInSeconds">lambdaTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#lambda_timeout_in_seconds BedrockagentcoreEvaluator#lambda_timeout_in_seconds}. |

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#lambda_arn BedrockagentcoreEvaluator#lambda_arn}.

---

##### `lambdaTimeoutInSeconds`<sup>Optional</sup> <a name="lambdaTimeoutInSeconds" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig.property.lambdaTimeoutInSeconds"></a>

```java
public java.lang.Number getLambdaTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#lambda_timeout_in_seconds BedrockagentcoreEvaluator#lambda_timeout_in_seconds}.

---

### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge;

BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.builder()
    .instructions(java.lang.String)
//  .modelConfig(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig>)
//  .ratingScale(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.property.instructions">instructions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#instructions BedrockagentcoreEvaluator#instructions}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.property.modelConfig">modelConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig</a>></code> | model_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.property.ratingScale">ratingScale</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale</a>></code> | rating_scale block. |

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.property.instructions"></a>

```java
public java.lang.String getInstructions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#instructions BedrockagentcoreEvaluator#instructions}.

---

##### `modelConfig`<sup>Optional</sup> <a name="modelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.property.modelConfig"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig> getModelConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig</a>>

model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#model_config BedrockagentcoreEvaluator#model_config}

---

##### `ratingScale`<sup>Optional</sup> <a name="ratingScale" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.property.ratingScale"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale> getRatingScale();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale</a>>

rating_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#rating_scale BedrockagentcoreEvaluator#rating_scale}

---

### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig;

BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig.builder()
//  .bedrockEvaluatorModelConfig(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig.property.bedrockEvaluatorModelConfig">bedrockEvaluatorModelConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig</a>></code> | bedrock_evaluator_model_config block. |

---

##### `bedrockEvaluatorModelConfig`<sup>Optional</sup> <a name="bedrockEvaluatorModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig.property.bedrockEvaluatorModelConfig"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig> getBedrockEvaluatorModelConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig</a>>

bedrock_evaluator_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#bedrock_evaluator_model_config BedrockagentcoreEvaluator#bedrock_evaluator_model_config}

---

### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig;

BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.builder()
    .modelId(java.lang.String)
//  .additionalModelRequestFields(java.lang.String)
//  .inferenceConfig(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.property.modelId">modelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#model_id BedrockagentcoreEvaluator#model_id}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.property.additionalModelRequestFields">additionalModelRequestFields</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#additional_model_request_fields BedrockagentcoreEvaluator#additional_model_request_fields}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.property.inferenceConfig">inferenceConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig</a>></code> | inference_config block. |

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#model_id BedrockagentcoreEvaluator#model_id}.

---

##### `additionalModelRequestFields`<sup>Optional</sup> <a name="additionalModelRequestFields" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.property.additionalModelRequestFields"></a>

```java
public java.lang.String getAdditionalModelRequestFields();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#additional_model_request_fields BedrockagentcoreEvaluator#additional_model_request_fields}.

---

##### `inferenceConfig`<sup>Optional</sup> <a name="inferenceConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.property.inferenceConfig"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig> getInferenceConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig</a>>

inference_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#inference_config BedrockagentcoreEvaluator#inference_config}

---

### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig;

BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.builder()
//  .maxTokens(java.lang.Number)
//  .stopSequences(java.util.List<java.lang.String>)
//  .temperature(java.lang.Number)
//  .topP(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.maxTokens">maxTokens</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#max_tokens BedrockagentcoreEvaluator#max_tokens}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.stopSequences">stopSequences</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#stop_sequences BedrockagentcoreEvaluator#stop_sequences}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#temperature BedrockagentcoreEvaluator#temperature}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.topP">topP</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#top_p BedrockagentcoreEvaluator#top_p}. |

---

##### `maxTokens`<sup>Optional</sup> <a name="maxTokens" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.maxTokens"></a>

```java
public java.lang.Number getMaxTokens();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#max_tokens BedrockagentcoreEvaluator#max_tokens}.

---

##### `stopSequences`<sup>Optional</sup> <a name="stopSequences" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.stopSequences"></a>

```java
public java.util.List<java.lang.String> getStopSequences();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#stop_sequences BedrockagentcoreEvaluator#stop_sequences}.

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#temperature BedrockagentcoreEvaluator#temperature}.

---

##### `topP`<sup>Optional</sup> <a name="topP" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#top_p BedrockagentcoreEvaluator#top_p}.

---

### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale;

BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale.builder()
//  .categorical(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical>)
//  .numerical(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale.property.categorical">categorical</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical</a>></code> | categorical block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale.property.numerical">numerical</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical</a>></code> | numerical block. |

---

##### `categorical`<sup>Optional</sup> <a name="categorical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale.property.categorical"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical> getCategorical();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical</a>>

categorical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#categorical BedrockagentcoreEvaluator#categorical}

---

##### `numerical`<sup>Optional</sup> <a name="numerical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale.property.numerical"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical> getNumerical();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical</a>>

numerical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#numerical BedrockagentcoreEvaluator#numerical}

---

### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical;

BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical.builder()
    .definition(java.lang.String)
    .label(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical.property.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#definition BedrockagentcoreEvaluator#definition}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#label BedrockagentcoreEvaluator#label}. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#definition BedrockagentcoreEvaluator#definition}.

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#label BedrockagentcoreEvaluator#label}.

---

### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical;

BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.builder()
    .definition(java.lang.String)
    .label(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.property.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#definition BedrockagentcoreEvaluator#definition}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#label BedrockagentcoreEvaluator#label}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#value BedrockagentcoreEvaluator#value}. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#definition BedrockagentcoreEvaluator#definition}.

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#label BedrockagentcoreEvaluator#label}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#value BedrockagentcoreEvaluator#value}.

---

### BedrockagentcoreEvaluatorTimeouts <a name="BedrockagentcoreEvaluatorTimeouts" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorTimeouts;

BedrockagentcoreEvaluatorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#create BedrockagentcoreEvaluator#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#delete BedrockagentcoreEvaluator#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrockagentcore_evaluator#update BedrockagentcoreEvaluator#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList <a name="BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList;

new BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.get"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig</a>>

---


### BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference;

new BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resetLambdaTimeoutInSeconds">resetLambdaTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaTimeoutInSeconds` <a name="resetLambdaTimeoutInSeconds" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resetLambdaTimeoutInSeconds"></a>

```java
public void resetLambdaTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaTimeoutInSecondsInput">lambdaTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaTimeoutInSeconds">lambdaTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaArnInput"></a>

```java
public java.lang.String getLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `lambdaTimeoutInSecondsInput`<sup>Optional</sup> <a name="lambdaTimeoutInSecondsInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaTimeoutInSecondsInput"></a>

```java
public java.lang.Number getLambdaTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

---

##### `lambdaTimeoutInSeconds`<sup>Required</sup> <a name="lambdaTimeoutInSeconds" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaTimeoutInSeconds"></a>

```java
public java.lang.Number getLambdaTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig</a>

---


### BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList <a name="BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList;

new BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.get"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased">BedrockagentcoreEvaluatorEvaluatorConfigCodeBased</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigCodeBased> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased">BedrockagentcoreEvaluatorEvaluatorConfigCodeBased</a>>

---


### BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference;

new BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.putLambdaConfig">putLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resetLambdaConfig">resetLambdaConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaConfig` <a name="putLambdaConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.putLambdaConfig"></a>

```java
public void putLambdaConfig(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.putLambdaConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig</a>>

---

##### `resetLambdaConfig` <a name="resetLambdaConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resetLambdaConfig"></a>

```java
public void resetLambdaConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.lambdaConfigInput">lambdaConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased">BedrockagentcoreEvaluatorEvaluatorConfigCodeBased</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaConfig`<sup>Required</sup> <a name="lambdaConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.lambdaConfig"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList getLambdaConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList</a>

---

##### `lambdaConfigInput`<sup>Optional</sup> <a name="lambdaConfigInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.lambdaConfigInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig> getLambdaConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreEvaluatorEvaluatorConfigCodeBased getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased">BedrockagentcoreEvaluatorEvaluatorConfigCodeBased</a>

---


### BedrockagentcoreEvaluatorEvaluatorConfigList <a name="BedrockagentcoreEvaluatorEvaluatorConfigList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigList;

new BedrockagentcoreEvaluatorEvaluatorConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.get"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig">BedrockagentcoreEvaluatorEvaluatorConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig">BedrockagentcoreEvaluatorEvaluatorConfig</a>>

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList;

new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.get"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge</a>>

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList;

new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.get"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig</a>>

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference;

new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetMaxTokens">resetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetStopSequences">resetStopSequences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetTopP">resetTopP</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxTokens` <a name="resetMaxTokens" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetMaxTokens"></a>

```java
public void resetMaxTokens()
```

##### `resetStopSequences` <a name="resetStopSequences" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetStopSequences"></a>

```java
public void resetStopSequences()
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetTemperature"></a>

```java
public void resetTemperature()
```

##### `resetTopP` <a name="resetTopP" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetTopP"></a>

```java
public void resetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.maxTokensInput">maxTokensInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.stopSequencesInput">stopSequencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.topPInput">topPInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.maxTokens">maxTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.stopSequences">stopSequences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.topP">topP</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxTokensInput`<sup>Optional</sup> <a name="maxTokensInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.maxTokensInput"></a>

```java
public java.lang.Number getMaxTokensInput();
```

- *Type:* java.lang.Number

---

##### `stopSequencesInput`<sup>Optional</sup> <a name="stopSequencesInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.stopSequencesInput"></a>

```java
public java.util.List<java.lang.String> getStopSequencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.temperatureInput"></a>

```java
public java.lang.Number getTemperatureInput();
```

- *Type:* java.lang.Number

---

##### `topPInput`<sup>Optional</sup> <a name="topPInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.topPInput"></a>

```java
public java.lang.Number getTopPInput();
```

- *Type:* java.lang.Number

---

##### `maxTokens`<sup>Required</sup> <a name="maxTokens" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.maxTokens"></a>

```java
public java.lang.Number getMaxTokens();
```

- *Type:* java.lang.Number

---

##### `stopSequences`<sup>Required</sup> <a name="stopSequences" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.stopSequences"></a>

```java
public java.util.List<java.lang.String> getStopSequences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig</a>

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList;

new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.get"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig</a>>

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference;

new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.putInferenceConfig">putInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resetAdditionalModelRequestFields">resetAdditionalModelRequestFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resetInferenceConfig">resetInferenceConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInferenceConfig` <a name="putInferenceConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.putInferenceConfig"></a>

```java
public void putInferenceConfig(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.putInferenceConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig</a>>

---

##### `resetAdditionalModelRequestFields` <a name="resetAdditionalModelRequestFields" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resetAdditionalModelRequestFields"></a>

```java
public void resetAdditionalModelRequestFields()
```

##### `resetInferenceConfig` <a name="resetInferenceConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resetInferenceConfig"></a>

```java
public void resetInferenceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.inferenceConfig">inferenceConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.additionalModelRequestFieldsInput">additionalModelRequestFieldsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.inferenceConfigInput">inferenceConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.additionalModelRequestFields">additionalModelRequestFields</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inferenceConfig`<sup>Required</sup> <a name="inferenceConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.inferenceConfig"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList getInferenceConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList</a>

---

##### `additionalModelRequestFieldsInput`<sup>Optional</sup> <a name="additionalModelRequestFieldsInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.additionalModelRequestFieldsInput"></a>

```java
public java.lang.String getAdditionalModelRequestFieldsInput();
```

- *Type:* java.lang.String

---

##### `inferenceConfigInput`<sup>Optional</sup> <a name="inferenceConfigInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.inferenceConfigInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig> getInferenceConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig</a>>

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `additionalModelRequestFields`<sup>Required</sup> <a name="additionalModelRequestFields" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.additionalModelRequestFields"></a>

```java
public java.lang.String getAdditionalModelRequestFields();
```

- *Type:* java.lang.String

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig</a>

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList;

new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.get"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig</a>>

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference;

new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.putBedrockEvaluatorModelConfig">putBedrockEvaluatorModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resetBedrockEvaluatorModelConfig">resetBedrockEvaluatorModelConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBedrockEvaluatorModelConfig` <a name="putBedrockEvaluatorModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.putBedrockEvaluatorModelConfig"></a>

```java
public void putBedrockEvaluatorModelConfig(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.putBedrockEvaluatorModelConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig</a>>

---

##### `resetBedrockEvaluatorModelConfig` <a name="resetBedrockEvaluatorModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resetBedrockEvaluatorModelConfig"></a>

```java
public void resetBedrockEvaluatorModelConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.bedrockEvaluatorModelConfig">bedrockEvaluatorModelConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.bedrockEvaluatorModelConfigInput">bedrockEvaluatorModelConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bedrockEvaluatorModelConfig`<sup>Required</sup> <a name="bedrockEvaluatorModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.bedrockEvaluatorModelConfig"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList getBedrockEvaluatorModelConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList</a>

---

##### `bedrockEvaluatorModelConfigInput`<sup>Optional</sup> <a name="bedrockEvaluatorModelConfigInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.bedrockEvaluatorModelConfigInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig> getBedrockEvaluatorModelConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig</a>

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference;

new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.putModelConfig">putModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.putRatingScale">putRatingScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resetModelConfig">resetModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resetRatingScale">resetRatingScale</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModelConfig` <a name="putModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.putModelConfig"></a>

```java
public void putModelConfig(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.putModelConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig</a>>

---

##### `putRatingScale` <a name="putRatingScale" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.putRatingScale"></a>

```java
public void putRatingScale(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.putRatingScale.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale</a>>

---

##### `resetModelConfig` <a name="resetModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resetModelConfig"></a>

```java
public void resetModelConfig()
```

##### `resetRatingScale` <a name="resetRatingScale" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resetRatingScale"></a>

```java
public void resetRatingScale()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.modelConfig">modelConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.ratingScale">ratingScale</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.instructionsInput">instructionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.modelConfigInput">modelConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.ratingScaleInput">ratingScaleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.instructions">instructions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelConfig`<sup>Required</sup> <a name="modelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.modelConfig"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList getModelConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList</a>

---

##### `ratingScale`<sup>Required</sup> <a name="ratingScale" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.ratingScale"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList getRatingScale();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList</a>

---

##### `instructionsInput`<sup>Optional</sup> <a name="instructionsInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.instructionsInput"></a>

```java
public java.lang.String getInstructionsInput();
```

- *Type:* java.lang.String

---

##### `modelConfigInput`<sup>Optional</sup> <a name="modelConfigInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.modelConfigInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig> getModelConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig</a>>

---

##### `ratingScaleInput`<sup>Optional</sup> <a name="ratingScaleInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.ratingScaleInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale> getRatingScaleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale</a>>

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.instructions"></a>

```java
public java.lang.String getInstructions();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge</a>

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList;

new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.get"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical</a>>

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference;

new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical</a>

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList;

new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.get"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale</a>>

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList;

new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.get"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical</a>>

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference;

new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical</a>

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference;

new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.putCategorical">putCategorical</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.putNumerical">putNumerical</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resetCategorical">resetCategorical</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resetNumerical">resetNumerical</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCategorical` <a name="putCategorical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.putCategorical"></a>

```java
public void putCategorical(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.putCategorical.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical</a>>

---

##### `putNumerical` <a name="putNumerical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.putNumerical"></a>

```java
public void putNumerical(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.putNumerical.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical</a>>

---

##### `resetCategorical` <a name="resetCategorical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resetCategorical"></a>

```java
public void resetCategorical()
```

##### `resetNumerical` <a name="resetNumerical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resetNumerical"></a>

```java
public void resetNumerical()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.categorical">categorical</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.numerical">numerical</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.categoricalInput">categoricalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.numericalInput">numericalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categorical`<sup>Required</sup> <a name="categorical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.categorical"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList getCategorical();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList</a>

---

##### `numerical`<sup>Required</sup> <a name="numerical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.numerical"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList getNumerical();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList</a>

---

##### `categoricalInput`<sup>Optional</sup> <a name="categoricalInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.categoricalInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical> getCategoricalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical</a>>

---

##### `numericalInput`<sup>Optional</sup> <a name="numericalInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.numericalInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical> getNumericalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale</a>

---


### BedrockagentcoreEvaluatorEvaluatorConfigOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference;

new BedrockagentcoreEvaluatorEvaluatorConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.putCodeBased">putCodeBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.putLlmAsAJudge">putLlmAsAJudge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resetCodeBased">resetCodeBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resetLlmAsAJudge">resetLlmAsAJudge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeBased` <a name="putCodeBased" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.putCodeBased"></a>

```java
public void putCodeBased(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigCodeBased> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.putCodeBased.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased">BedrockagentcoreEvaluatorEvaluatorConfigCodeBased</a>>

---

##### `putLlmAsAJudge` <a name="putLlmAsAJudge" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.putLlmAsAJudge"></a>

```java
public void putLlmAsAJudge(IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.putLlmAsAJudge.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge</a>>

---

##### `resetCodeBased` <a name="resetCodeBased" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resetCodeBased"></a>

```java
public void resetCodeBased()
```

##### `resetLlmAsAJudge` <a name="resetLlmAsAJudge" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resetLlmAsAJudge"></a>

```java
public void resetLlmAsAJudge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.codeBased">codeBased</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.llmAsAJudge">llmAsAJudge</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.codeBasedInput">codeBasedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased">BedrockagentcoreEvaluatorEvaluatorConfigCodeBased</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.llmAsAJudgeInput">llmAsAJudgeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig">BedrockagentcoreEvaluatorEvaluatorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeBased`<sup>Required</sup> <a name="codeBased" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.codeBased"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList getCodeBased();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList</a>

---

##### `llmAsAJudge`<sup>Required</sup> <a name="llmAsAJudge" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.llmAsAJudge"></a>

```java
public BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList getLlmAsAJudge();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList</a>

---

##### `codeBasedInput`<sup>Optional</sup> <a name="codeBasedInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.codeBasedInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigCodeBased> getCodeBasedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased">BedrockagentcoreEvaluatorEvaluatorConfigCodeBased</a>>

---

##### `llmAsAJudgeInput`<sup>Optional</sup> <a name="llmAsAJudgeInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.llmAsAJudgeInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge> getLlmAsAJudgeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreEvaluatorEvaluatorConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig">BedrockagentcoreEvaluatorEvaluatorConfig</a>

---


### BedrockagentcoreEvaluatorTimeoutsOutputReference <a name="BedrockagentcoreEvaluatorTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_evaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference;

new BedrockagentcoreEvaluatorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts">BedrockagentcoreEvaluatorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreEvaluatorTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts">BedrockagentcoreEvaluatorTimeouts</a>

---



