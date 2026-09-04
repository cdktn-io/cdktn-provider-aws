# `sagemakerModelCardExportJob` Submodule <a name="`sagemakerModelCardExportJob` Submodule" id="@cdktn/provider-aws.sagemakerModelCardExportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerModelCardExportJob <a name="SagemakerModelCardExportJob" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job aws_sagemaker_model_card_export_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_model_card_export_job.SagemakerModelCardExportJob;

SagemakerModelCardExportJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .modelCardExportJobName(java.lang.String)
    .modelCardName(java.lang.String)
//  .modelCardVersion(java.lang.Number)
//  .outputConfig(IResolvable|java.util.List<SagemakerModelCardExportJobOutputConfig>)
//  .region(java.lang.String)
//  .timeouts(SagemakerModelCardExportJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.modelCardExportJobName">modelCardExportJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#model_card_export_job_name SagemakerModelCardExportJob#model_card_export_job_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.modelCardName">modelCardName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#model_card_name SagemakerModelCardExportJob#model_card_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.modelCardVersion">modelCardVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#model_card_version SagemakerModelCardExportJob#model_card_version}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.outputConfig">outputConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>></code> | output_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `modelCardExportJobName`<sup>Required</sup> <a name="modelCardExportJobName" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.modelCardExportJobName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#model_card_export_job_name SagemakerModelCardExportJob#model_card_export_job_name}.

---

##### `modelCardName`<sup>Required</sup> <a name="modelCardName" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.modelCardName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#model_card_name SagemakerModelCardExportJob#model_card_name}.

---

##### `modelCardVersion`<sup>Optional</sup> <a name="modelCardVersion" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.modelCardVersion"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#model_card_version SagemakerModelCardExportJob#model_card_version}.

---

##### `outputConfig`<sup>Optional</sup> <a name="outputConfig" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.outputConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>>

output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#output_config SagemakerModelCardExportJob#output_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#region SagemakerModelCardExportJob#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#timeouts SagemakerModelCardExportJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.putOutputConfig">putOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetModelCardVersion">resetModelCardVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetOutputConfig">resetOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOutputConfig` <a name="putOutputConfig" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.putOutputConfig"></a>

```java
public void putOutputConfig(IResolvable|java.util.List<SagemakerModelCardExportJobOutputConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.putOutputConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.putTimeouts"></a>

```java
public void putTimeouts(SagemakerModelCardExportJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a>

---

##### `resetModelCardVersion` <a name="resetModelCardVersion" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetModelCardVersion"></a>

```java
public void resetModelCardVersion()
```

##### `resetOutputConfig` <a name="resetOutputConfig" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetOutputConfig"></a>

```java
public void resetOutputConfig()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerModelCardExportJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isConstruct"></a>

```java
import io.cdktn.providers.aws.sagemaker_model_card_export_job.SagemakerModelCardExportJob;

SagemakerModelCardExportJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.sagemaker_model_card_export_job.SagemakerModelCardExportJob;

SagemakerModelCardExportJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.sagemaker_model_card_export_job.SagemakerModelCardExportJob;

SagemakerModelCardExportJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.sagemaker_model_card_export_job.SagemakerModelCardExportJob;

SagemakerModelCardExportJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerModelCardExportJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerModelCardExportJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerModelCardExportJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerModelCardExportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerModelCardExportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.exportArtifacts">exportArtifacts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList">SagemakerModelCardExportJobExportArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardExportJobArn">modelCardExportJobArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList">SagemakerModelCardExportJobOutputConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference">SagemakerModelCardExportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardExportJobNameInput">modelCardExportJobNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardNameInput">modelCardNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardVersionInput">modelCardVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.outputConfigInput">outputConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardExportJobName">modelCardExportJobName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardName">modelCardName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardVersion">modelCardVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `exportArtifacts`<sup>Required</sup> <a name="exportArtifacts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.exportArtifacts"></a>

```java
public SagemakerModelCardExportJobExportArtifactsList getExportArtifacts();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList">SagemakerModelCardExportJobExportArtifactsList</a>

---

##### `modelCardExportJobArn`<sup>Required</sup> <a name="modelCardExportJobArn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardExportJobArn"></a>

```java
public java.lang.String getModelCardExportJobArn();
```

- *Type:* java.lang.String

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.outputConfig"></a>

```java
public SagemakerModelCardExportJobOutputConfigList getOutputConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList">SagemakerModelCardExportJobOutputConfigList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.timeouts"></a>

```java
public SagemakerModelCardExportJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference">SagemakerModelCardExportJobTimeoutsOutputReference</a>

---

##### `modelCardExportJobNameInput`<sup>Optional</sup> <a name="modelCardExportJobNameInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardExportJobNameInput"></a>

```java
public java.lang.String getModelCardExportJobNameInput();
```

- *Type:* java.lang.String

---

##### `modelCardNameInput`<sup>Optional</sup> <a name="modelCardNameInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardNameInput"></a>

```java
public java.lang.String getModelCardNameInput();
```

- *Type:* java.lang.String

---

##### `modelCardVersionInput`<sup>Optional</sup> <a name="modelCardVersionInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardVersionInput"></a>

```java
public java.lang.Number getModelCardVersionInput();
```

- *Type:* java.lang.Number

---

##### `outputConfigInput`<sup>Optional</sup> <a name="outputConfigInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.outputConfigInput"></a>

```java
public IResolvable|java.util.List<SagemakerModelCardExportJobOutputConfig> getOutputConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.timeoutsInput"></a>

```java
public IResolvable|SagemakerModelCardExportJobTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a>

---

##### `modelCardExportJobName`<sup>Required</sup> <a name="modelCardExportJobName" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardExportJobName"></a>

```java
public java.lang.String getModelCardExportJobName();
```

- *Type:* java.lang.String

---

##### `modelCardName`<sup>Required</sup> <a name="modelCardName" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardName"></a>

```java
public java.lang.String getModelCardName();
```

- *Type:* java.lang.String

---

##### `modelCardVersion`<sup>Required</sup> <a name="modelCardVersion" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.modelCardVersion"></a>

```java
public java.lang.Number getModelCardVersion();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerModelCardExportJobConfig <a name="SagemakerModelCardExportJobConfig" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_model_card_export_job.SagemakerModelCardExportJobConfig;

SagemakerModelCardExportJobConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .modelCardExportJobName(java.lang.String)
    .modelCardName(java.lang.String)
//  .modelCardVersion(java.lang.Number)
//  .outputConfig(IResolvable|java.util.List<SagemakerModelCardExportJobOutputConfig>)
//  .region(java.lang.String)
//  .timeouts(SagemakerModelCardExportJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.modelCardExportJobName">modelCardExportJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#model_card_export_job_name SagemakerModelCardExportJob#model_card_export_job_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.modelCardName">modelCardName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#model_card_name SagemakerModelCardExportJob#model_card_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.modelCardVersion">modelCardVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#model_card_version SagemakerModelCardExportJob#model_card_version}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.outputConfig">outputConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>></code> | output_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `modelCardExportJobName`<sup>Required</sup> <a name="modelCardExportJobName" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.modelCardExportJobName"></a>

```java
public java.lang.String getModelCardExportJobName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#model_card_export_job_name SagemakerModelCardExportJob#model_card_export_job_name}.

---

##### `modelCardName`<sup>Required</sup> <a name="modelCardName" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.modelCardName"></a>

```java
public java.lang.String getModelCardName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#model_card_name SagemakerModelCardExportJob#model_card_name}.

---

##### `modelCardVersion`<sup>Optional</sup> <a name="modelCardVersion" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.modelCardVersion"></a>

```java
public java.lang.Number getModelCardVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#model_card_version SagemakerModelCardExportJob#model_card_version}.

---

##### `outputConfig`<sup>Optional</sup> <a name="outputConfig" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.outputConfig"></a>

```java
public IResolvable|java.util.List<SagemakerModelCardExportJobOutputConfig> getOutputConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>>

output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#output_config SagemakerModelCardExportJob#output_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#region SagemakerModelCardExportJob#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobConfig.property.timeouts"></a>

```java
public SagemakerModelCardExportJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#timeouts SagemakerModelCardExportJob#timeouts}

---

### SagemakerModelCardExportJobExportArtifacts <a name="SagemakerModelCardExportJobExportArtifacts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifacts.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_model_card_export_job.SagemakerModelCardExportJobExportArtifacts;

SagemakerModelCardExportJobExportArtifacts.builder()
    .build();
```


### SagemakerModelCardExportJobOutputConfig <a name="SagemakerModelCardExportJobOutputConfig" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_model_card_export_job.SagemakerModelCardExportJobOutputConfig;

SagemakerModelCardExportJobOutputConfig.builder()
    .s3OutputPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig.property.s3OutputPath">s3OutputPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#s3_output_path SagemakerModelCardExportJob#s3_output_path}. |

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig.property.s3OutputPath"></a>

```java
public java.lang.String getS3OutputPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#s3_output_path SagemakerModelCardExportJob#s3_output_path}.

---

### SagemakerModelCardExportJobTimeouts <a name="SagemakerModelCardExportJobTimeouts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_model_card_export_job.SagemakerModelCardExportJobTimeouts;

SagemakerModelCardExportJobTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_model_card_export_job#create SagemakerModelCardExportJob#create}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerModelCardExportJobExportArtifactsList <a name="SagemakerModelCardExportJobExportArtifactsList" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_model_card_export_job.SagemakerModelCardExportJobExportArtifactsList;

new SagemakerModelCardExportJobExportArtifactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.get"></a>

```java
public SagemakerModelCardExportJobExportArtifactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SagemakerModelCardExportJobExportArtifactsOutputReference <a name="SagemakerModelCardExportJobExportArtifactsOutputReference" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_model_card_export_job.SagemakerModelCardExportJobExportArtifactsOutputReference;

new SagemakerModelCardExportJobExportArtifactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.s3ExportArtifacts">s3ExportArtifacts</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifacts">SagemakerModelCardExportJobExportArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3ExportArtifacts`<sup>Required</sup> <a name="s3ExportArtifacts" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.s3ExportArtifacts"></a>

```java
public java.lang.String getS3ExportArtifacts();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifactsOutputReference.property.internalValue"></a>

```java
public SagemakerModelCardExportJobExportArtifacts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobExportArtifacts">SagemakerModelCardExportJobExportArtifacts</a>

---


### SagemakerModelCardExportJobOutputConfigList <a name="SagemakerModelCardExportJobOutputConfigList" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_model_card_export_job.SagemakerModelCardExportJobOutputConfigList;

new SagemakerModelCardExportJobOutputConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.get"></a>

```java
public SagemakerModelCardExportJobOutputConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerModelCardExportJobOutputConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>>

---


### SagemakerModelCardExportJobOutputConfigOutputReference <a name="SagemakerModelCardExportJobOutputConfigOutputReference" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_model_card_export_job.SagemakerModelCardExportJobOutputConfigOutputReference;

new SagemakerModelCardExportJobOutputConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.s3OutputPathInput">s3OutputPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.s3OutputPath">s3OutputPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3OutputPathInput`<sup>Optional</sup> <a name="s3OutputPathInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.s3OutputPathInput"></a>

```java
public java.lang.String getS3OutputPathInput();
```

- *Type:* java.lang.String

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.s3OutputPath"></a>

```java
public java.lang.String getS3OutputPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelCardExportJobOutputConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobOutputConfig">SagemakerModelCardExportJobOutputConfig</a>

---


### SagemakerModelCardExportJobTimeoutsOutputReference <a name="SagemakerModelCardExportJobTimeoutsOutputReference" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.sagemaker_model_card_export_job.SagemakerModelCardExportJobTimeoutsOutputReference;

new SagemakerModelCardExportJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelCardExportJobTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerModelCardExportJob.SagemakerModelCardExportJobTimeouts">SagemakerModelCardExportJobTimeouts</a>

---



