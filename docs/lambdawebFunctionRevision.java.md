# `lambdawebFunctionRevision` Submodule <a name="`lambdawebFunctionRevision` Submodule" id="@cdktn/provider-aws.lambdawebFunctionRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdawebFunctionRevision <a name="LambdawebFunctionRevision" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision aws_lambdaweb_function_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevision;

LambdawebFunctionRevision.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .functionName(java.lang.String)
//  .buildConfig(IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfig>)
//  .description(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .region(java.lang.String)
//  .serviceConfig(IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfig>)
//  .timeouts(LambdawebFunctionRevisionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#function_name LambdawebFunctionRevision#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.buildConfig">buildConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>></code> | build_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#description LambdawebFunctionRevision#description}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#kms_key_arn LambdawebFunctionRevision#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.serviceConfig">serviceConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>></code> | service_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.functionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#function_name LambdawebFunctionRevision#function_name}.

---

##### `buildConfig`<sup>Optional</sup> <a name="buildConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.buildConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>>

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#build_config LambdawebFunctionRevision#build_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#description LambdawebFunctionRevision#description}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#kms_key_arn LambdawebFunctionRevision#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#region LambdawebFunctionRevision#region}

---

##### `serviceConfig`<sup>Optional</sup> <a name="serviceConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.serviceConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>>

service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#service_config LambdawebFunctionRevision#service_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#timeouts LambdawebFunctionRevision#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putBuildConfig">putBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putServiceConfig">putServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetBuildConfig">resetBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetServiceConfig">resetServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBuildConfig` <a name="putBuildConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putBuildConfig"></a>

```java
public void putBuildConfig(IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putBuildConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>>

---

##### `putServiceConfig` <a name="putServiceConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putServiceConfig"></a>

```java
public void putServiceConfig(IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putServiceConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putTimeouts"></a>

```java
public void putTimeouts(LambdawebFunctionRevisionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a>

---

##### `resetBuildConfig` <a name="resetBuildConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetBuildConfig"></a>

```java
public void resetBuildConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetServiceConfig` <a name="resetServiceConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetServiceConfig"></a>

```java
public void resetServiceConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdawebFunctionRevision resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isConstruct"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevision;

LambdawebFunctionRevision.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevision;

LambdawebFunctionRevision.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevision;

LambdawebFunctionRevision.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevision;

LambdawebFunctionRevision.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LambdawebFunctionRevision.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LambdawebFunctionRevision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LambdawebFunctionRevision to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LambdawebFunctionRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LambdawebFunctionRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList">LambdawebFunctionRevisionBuildConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.revisionId">revisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.serviceConfig">serviceConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList">LambdawebFunctionRevisionServiceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference">LambdawebFunctionRevisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.buildConfigInput">buildConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.serviceConfigInput">serviceConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `buildConfig`<sup>Required</sup> <a name="buildConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.buildConfig"></a>

```java
public LambdawebFunctionRevisionBuildConfigList getBuildConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList">LambdawebFunctionRevisionBuildConfigList</a>

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.revisionId"></a>

```java
public java.lang.String getRevisionId();
```

- *Type:* java.lang.String

---

##### `serviceConfig`<sup>Required</sup> <a name="serviceConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.serviceConfig"></a>

```java
public LambdawebFunctionRevisionServiceConfigList getServiceConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList">LambdawebFunctionRevisionServiceConfigList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.timeouts"></a>

```java
public LambdawebFunctionRevisionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference">LambdawebFunctionRevisionTimeoutsOutputReference</a>

---

##### `buildConfigInput`<sup>Optional</sup> <a name="buildConfigInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.buildConfigInput"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfig> getBuildConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serviceConfigInput`<sup>Optional</sup> <a name="serviceConfigInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.serviceConfigInput"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfig> getServiceConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.timeoutsInput"></a>

```java
public IResolvable|LambdawebFunctionRevisionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdawebFunctionRevisionBuildConfig <a name="LambdawebFunctionRevisionBuildConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionBuildConfig;

LambdawebFunctionRevisionBuildConfig.builder()
//  .codeConfig(IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfigCodeConfig>)
//  .runtimeConfig(IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfigRuntimeConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig.property.codeConfig">codeConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>></code> | code_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig.property.runtimeConfig">runtimeConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>></code> | runtime_config block. |

---

##### `codeConfig`<sup>Optional</sup> <a name="codeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig.property.codeConfig"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfigCodeConfig> getCodeConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>>

code_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#code_config LambdawebFunctionRevision#code_config}

---

##### `runtimeConfig`<sup>Optional</sup> <a name="runtimeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig.property.runtimeConfig"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfigRuntimeConfig> getRuntimeConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#runtime_config LambdawebFunctionRevision#runtime_config}

---

### LambdawebFunctionRevisionBuildConfigCodeConfig <a name="LambdawebFunctionRevisionBuildConfigCodeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionBuildConfigCodeConfig;

LambdawebFunctionRevisionBuildConfigCodeConfig.builder()
//  .s3Object(IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfigCodeConfigS3Object>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig.property.s3Object">s3Object</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>></code> | s3_object block. |

---

##### `s3Object`<sup>Optional</sup> <a name="s3Object" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig.property.s3Object"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfigCodeConfigS3Object> getS3Object();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>>

s3_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#s3_object LambdawebFunctionRevision#s3_object}

---

### LambdawebFunctionRevisionBuildConfigCodeConfigS3Object <a name="LambdawebFunctionRevisionBuildConfigCodeConfigS3Object" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object;

LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.builder()
    .bucket(java.lang.String)
    .key(java.lang.String)
//  .versionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#bucket LambdawebFunctionRevision#bucket}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#key LambdawebFunctionRevision#key}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.versionId">versionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#version_id LambdawebFunctionRevision#version_id}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#bucket LambdawebFunctionRevision#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#key LambdawebFunctionRevision#key}.

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#version_id LambdawebFunctionRevision#version_id}.

---

### LambdawebFunctionRevisionBuildConfigRuntimeConfig <a name="LambdawebFunctionRevisionBuildConfigRuntimeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionBuildConfigRuntimeConfig;

LambdawebFunctionRevisionBuildConfigRuntimeConfig.builder()
    .runtime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig.property.runtime">runtime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#runtime LambdawebFunctionRevision#runtime}. |

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#runtime LambdawebFunctionRevision#runtime}.

---

### LambdawebFunctionRevisionConfig <a name="LambdawebFunctionRevisionConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionConfig;

LambdawebFunctionRevisionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .functionName(java.lang.String)
//  .buildConfig(IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfig>)
//  .description(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .region(java.lang.String)
//  .serviceConfig(IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfig>)
//  .timeouts(LambdawebFunctionRevisionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#function_name LambdawebFunctionRevision#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.buildConfig">buildConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>></code> | build_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#description LambdawebFunctionRevision#description}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#kms_key_arn LambdawebFunctionRevision#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.serviceConfig">serviceConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>></code> | service_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#function_name LambdawebFunctionRevision#function_name}.

---

##### `buildConfig`<sup>Optional</sup> <a name="buildConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.buildConfig"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfig> getBuildConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>>

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#build_config LambdawebFunctionRevision#build_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#description LambdawebFunctionRevision#description}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#kms_key_arn LambdawebFunctionRevision#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#region LambdawebFunctionRevision#region}

---

##### `serviceConfig`<sup>Optional</sup> <a name="serviceConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.serviceConfig"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfig> getServiceConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>>

service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#service_config LambdawebFunctionRevision#service_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.timeouts"></a>

```java
public LambdawebFunctionRevisionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#timeouts LambdawebFunctionRevision#timeouts}

---

### LambdawebFunctionRevisionServiceConfig <a name="LambdawebFunctionRevisionServiceConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionServiceConfig;

LambdawebFunctionRevisionServiceConfig.builder()
    .executionRoleArn(java.lang.String)
//  .egressNetworkConnectorArn(java.lang.String)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .maxConcurrencyPerEnvironment(java.lang.Number)
//  .telemetryConfig(IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfigTelemetryConfig>)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#execution_role_arn LambdawebFunctionRevision#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.egressNetworkConnectorArn">egressNetworkConnectorArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#egress_network_connector_arn LambdawebFunctionRevision#egress_network_connector_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#environment_variables LambdawebFunctionRevision#environment_variables}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.maxConcurrencyPerEnvironment">maxConcurrencyPerEnvironment</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#max_concurrency_per_environment LambdawebFunctionRevision#max_concurrency_per_environment}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.telemetryConfig">telemetryConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>></code> | telemetry_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#timeout_seconds LambdawebFunctionRevision#timeout_seconds}. |

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#execution_role_arn LambdawebFunctionRevision#execution_role_arn}.

---

##### `egressNetworkConnectorArn`<sup>Optional</sup> <a name="egressNetworkConnectorArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.egressNetworkConnectorArn"></a>

```java
public java.lang.String getEgressNetworkConnectorArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#egress_network_connector_arn LambdawebFunctionRevision#egress_network_connector_arn}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#environment_variables LambdawebFunctionRevision#environment_variables}.

---

##### `maxConcurrencyPerEnvironment`<sup>Optional</sup> <a name="maxConcurrencyPerEnvironment" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.maxConcurrencyPerEnvironment"></a>

```java
public java.lang.Number getMaxConcurrencyPerEnvironment();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#max_concurrency_per_environment LambdawebFunctionRevision#max_concurrency_per_environment}.

---

##### `telemetryConfig`<sup>Optional</sup> <a name="telemetryConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.telemetryConfig"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfigTelemetryConfig> getTelemetryConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>>

telemetry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#telemetry_config LambdawebFunctionRevision#telemetry_config}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#timeout_seconds LambdawebFunctionRevision#timeout_seconds}.

---

### LambdawebFunctionRevisionServiceConfigTelemetryConfig <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionServiceConfigTelemetryConfig;

LambdawebFunctionRevisionServiceConfigTelemetryConfig.builder()
//  .loggingConfig(IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig.property.loggingConfig">loggingConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>></code> | logging_config block. |

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig.property.loggingConfig"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig> getLoggingConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#logging_config LambdawebFunctionRevision#logging_config}

---

### LambdawebFunctionRevisionServiceConfigTelemetryConfigActual <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActual" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActual"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActual.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActual;

LambdawebFunctionRevisionServiceConfigTelemetryConfigActual.builder()
    .build();
```


### LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig;

LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig.builder()
    .build();
```


### LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig;

LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.builder()
//  .applicationLogLevel(java.lang.String)
//  .logGroup(java.lang.String)
//  .systemLogLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.applicationLogLevel">applicationLogLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#application_log_level LambdawebFunctionRevision#application_log_level}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#log_group LambdawebFunctionRevision#log_group}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.systemLogLevel">systemLogLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#system_log_level LambdawebFunctionRevision#system_log_level}. |

---

##### `applicationLogLevel`<sup>Optional</sup> <a name="applicationLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.applicationLogLevel"></a>

```java
public java.lang.String getApplicationLogLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#application_log_level LambdawebFunctionRevision#application_log_level}.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#log_group LambdawebFunctionRevision#log_group}.

---

##### `systemLogLevel`<sup>Optional</sup> <a name="systemLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.systemLogLevel"></a>

```java
public java.lang.String getSystemLogLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#system_log_level LambdawebFunctionRevision#system_log_level}.

---

### LambdawebFunctionRevisionTimeouts <a name="LambdawebFunctionRevisionTimeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionTimeouts;

LambdawebFunctionRevisionTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#create LambdawebFunctionRevision#create}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdawebFunctionRevisionBuildConfigCodeConfigList <a name="LambdawebFunctionRevisionBuildConfigCodeConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionBuildConfigCodeConfigList;

new LambdawebFunctionRevisionBuildConfigCodeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.get"></a>

```java
public LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfigCodeConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>>

---


### LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference <a name="LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference;

new LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object">putS3Object</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.resetS3Object">resetS3Object</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Object` <a name="putS3Object" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object"></a>

```java
public void putS3Object(IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfigCodeConfigS3Object> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>>

---

##### `resetS3Object` <a name="resetS3Object" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.resetS3Object"></a>

```java
public void resetS3Object()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object">s3Object</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList">LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3ObjectInput">s3ObjectInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Object`<sup>Required</sup> <a name="s3Object" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object"></a>

```java
public LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList getS3Object();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList">LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList</a>

---

##### `s3ObjectInput`<sup>Optional</sup> <a name="s3ObjectInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3ObjectInput"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfigCodeConfigS3Object> getS3ObjectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdawebFunctionRevisionBuildConfigCodeConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>

---


### LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList <a name="LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList;

new LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.get"></a>

```java
public LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfigCodeConfigS3Object> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>>

---


### LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference <a name="LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference;

new LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersionId` <a name="resetVersionId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resetVersionId"></a>

```java
public void resetVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionIdInput"></a>

```java
public java.lang.String getVersionIdInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdawebFunctionRevisionBuildConfigCodeConfigS3Object getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---


### LambdawebFunctionRevisionBuildConfigList <a name="LambdawebFunctionRevisionBuildConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionBuildConfigList;

new LambdawebFunctionRevisionBuildConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.get"></a>

```java
public LambdawebFunctionRevisionBuildConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>>

---


### LambdawebFunctionRevisionBuildConfigOutputReference <a name="LambdawebFunctionRevisionBuildConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionBuildConfigOutputReference;

new LambdawebFunctionRevisionBuildConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putCodeConfig">putCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig">putRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resetCodeConfig">resetCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resetRuntimeConfig">resetRuntimeConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeConfig` <a name="putCodeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putCodeConfig"></a>

```java
public void putCodeConfig(IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfigCodeConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putCodeConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>>

---

##### `putRuntimeConfig` <a name="putRuntimeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig"></a>

```java
public void putRuntimeConfig(IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfigRuntimeConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>>

---

##### `resetCodeConfig` <a name="resetCodeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resetCodeConfig"></a>

```java
public void resetCodeConfig()
```

##### `resetRuntimeConfig` <a name="resetRuntimeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resetRuntimeConfig"></a>

```java
public void resetRuntimeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.codeConfig">codeConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList">LambdawebFunctionRevisionBuildConfigCodeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList">LambdawebFunctionRevisionBuildConfigRuntimeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.codeConfigInput">codeConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.runtimeConfigInput">runtimeConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeConfig`<sup>Required</sup> <a name="codeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.codeConfig"></a>

```java
public LambdawebFunctionRevisionBuildConfigCodeConfigList getCodeConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList">LambdawebFunctionRevisionBuildConfigCodeConfigList</a>

---

##### `runtimeConfig`<sup>Required</sup> <a name="runtimeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig"></a>

```java
public LambdawebFunctionRevisionBuildConfigRuntimeConfigList getRuntimeConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList">LambdawebFunctionRevisionBuildConfigRuntimeConfigList</a>

---

##### `codeConfigInput`<sup>Optional</sup> <a name="codeConfigInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.codeConfigInput"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfigCodeConfig> getCodeConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>>

---

##### `runtimeConfigInput`<sup>Optional</sup> <a name="runtimeConfigInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.runtimeConfigInput"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfigRuntimeConfig> getRuntimeConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdawebFunctionRevisionBuildConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>

---


### LambdawebFunctionRevisionBuildConfigRuntimeConfigList <a name="LambdawebFunctionRevisionBuildConfigRuntimeConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList;

new LambdawebFunctionRevisionBuildConfigRuntimeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.get"></a>

```java
public LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionBuildConfigRuntimeConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>>

---


### LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference <a name="LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference;

new LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdawebFunctionRevisionBuildConfigRuntimeConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>

---


### LambdawebFunctionRevisionServiceConfigList <a name="LambdawebFunctionRevisionServiceConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionServiceConfigList;

new LambdawebFunctionRevisionServiceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.get"></a>

```java
public LambdawebFunctionRevisionServiceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>>

---


### LambdawebFunctionRevisionServiceConfigOutputReference <a name="LambdawebFunctionRevisionServiceConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionServiceConfigOutputReference;

new LambdawebFunctionRevisionServiceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig">putTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetEgressNetworkConnectorArn">resetEgressNetworkConnectorArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetMaxConcurrencyPerEnvironment">resetMaxConcurrencyPerEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetTelemetryConfig">resetTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTelemetryConfig` <a name="putTelemetryConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig"></a>

```java
public void putTelemetryConfig(IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfigTelemetryConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>>

---

##### `resetEgressNetworkConnectorArn` <a name="resetEgressNetworkConnectorArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetEgressNetworkConnectorArn"></a>

```java
public void resetEgressNetworkConnectorArn()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetMaxConcurrencyPerEnvironment` <a name="resetMaxConcurrencyPerEnvironment" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetMaxConcurrencyPerEnvironment"></a>

```java
public void resetMaxConcurrencyPerEnvironment()
```

##### `resetTelemetryConfig` <a name="resetTelemetryConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetTelemetryConfig"></a>

```java
public void resetTelemetryConfig()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigActual">telemetryConfigActual</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.egressNetworkConnectorArnInput">egressNetworkConnectorArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironmentInput">maxConcurrencyPerEnvironmentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigInput">telemetryConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.egressNetworkConnectorArn">egressNetworkConnectorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment">maxConcurrencyPerEnvironment</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `telemetryConfig`<sup>Required</sup> <a name="telemetryConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig"></a>

```java
public LambdawebFunctionRevisionServiceConfigTelemetryConfigList getTelemetryConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigList</a>

---

##### `telemetryConfigActual`<sup>Required</sup> <a name="telemetryConfigActual" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigActual"></a>

```java
public LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList getTelemetryConfigActual();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList</a>

---

##### `egressNetworkConnectorArnInput`<sup>Optional</sup> <a name="egressNetworkConnectorArnInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.egressNetworkConnectorArnInput"></a>

```java
public java.lang.String getEgressNetworkConnectorArnInput();
```

- *Type:* java.lang.String

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `maxConcurrencyPerEnvironmentInput`<sup>Optional</sup> <a name="maxConcurrencyPerEnvironmentInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironmentInput"></a>

```java
public java.lang.Number getMaxConcurrencyPerEnvironmentInput();
```

- *Type:* java.lang.Number

---

##### `telemetryConfigInput`<sup>Optional</sup> <a name="telemetryConfigInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigInput"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfigTelemetryConfig> getTelemetryConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>>

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `egressNetworkConnectorArn`<sup>Required</sup> <a name="egressNetworkConnectorArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.egressNetworkConnectorArn"></a>

```java
public java.lang.String getEgressNetworkConnectorArn();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `maxConcurrencyPerEnvironment`<sup>Required</sup> <a name="maxConcurrencyPerEnvironment" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment"></a>

```java
public java.lang.Number getMaxConcurrencyPerEnvironment();
```

- *Type:* java.lang.Number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdawebFunctionRevisionServiceConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList;

new LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.get"></a>

```java
public LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList;

new LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.get"></a>

```java
public LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference;

new LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.applicationLogLevel">applicationLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.systemLogLevel">systemLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationLogLevel`<sup>Required</sup> <a name="applicationLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.applicationLogLevel"></a>

```java
public java.lang.String getApplicationLogLevel();
```

- *Type:* java.lang.String

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `systemLogLevel`<sup>Required</sup> <a name="systemLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.systemLogLevel"></a>

```java
public java.lang.String getSystemLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.internalValue"></a>

```java
public LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig</a>

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference;

new LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActual">LambdawebFunctionRevisionServiceConfigTelemetryConfigActual</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.loggingConfig"></a>

```java
public LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList getLoggingConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.internalValue"></a>

```java
public LambdawebFunctionRevisionServiceConfigTelemetryConfigActual getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActual">LambdawebFunctionRevisionServiceConfigTelemetryConfigActual</a>

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigList <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList;

new LambdawebFunctionRevisionServiceConfigTelemetryConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.get"></a>

```java
public LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfigTelemetryConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>>

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList;

new LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.get"></a>

```java
public LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>>

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference;

new LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetApplicationLogLevel">resetApplicationLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel">resetSystemLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationLogLevel` <a name="resetApplicationLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetApplicationLogLevel"></a>

```java
public void resetApplicationLogLevel()
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```

##### `resetSystemLogLevel` <a name="resetSystemLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel"></a>

```java
public void resetSystemLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevelInput">applicationLogLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput">systemLogLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel">applicationLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel">systemLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationLogLevelInput`<sup>Optional</sup> <a name="applicationLogLevelInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevelInput"></a>

```java
public java.lang.String getApplicationLogLevelInput();
```

- *Type:* java.lang.String

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `systemLogLevelInput`<sup>Optional</sup> <a name="systemLogLevelInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput"></a>

```java
public java.lang.String getSystemLogLevelInput();
```

- *Type:* java.lang.String

---

##### `applicationLogLevel`<sup>Required</sup> <a name="applicationLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel"></a>

```java
public java.lang.String getApplicationLogLevel();
```

- *Type:* java.lang.String

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `systemLogLevel`<sup>Required</sup> <a name="systemLogLevel" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel"></a>

```java
public java.lang.String getSystemLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference;

new LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig"></a>

```java
public void putLoggingConfig(IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>>

---

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig"></a>

```java
public LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList getLoggingConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList</a>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfigInput"></a>

```java
public IResolvable|java.util.List<LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig> getLoggingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdawebFunctionRevisionServiceConfigTelemetryConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>

---


### LambdawebFunctionRevisionTimeoutsOutputReference <a name="LambdawebFunctionRevisionTimeoutsOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdaweb_function_revision.LambdawebFunctionRevisionTimeoutsOutputReference;

new LambdawebFunctionRevisionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdawebFunctionRevisionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a>

---



