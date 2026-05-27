# `ssmDefaultPatchBaseline` Submodule <a name="`ssmDefaultPatchBaseline` Submodule" id="@cdktn/provider-aws.ssmDefaultPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmDefaultPatchBaseline <a name="SsmDefaultPatchBaseline" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline aws_ssm_default_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer"></a>

```java
import io.cdktn.providers.aws.ssm_default_patch_baseline.SsmDefaultPatchBaseline;

SsmDefaultPatchBaseline.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .baselineId(java.lang.String)
    .operatingSystem(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.baselineId">baselineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline#baseline_id SsmDefaultPatchBaseline#baseline_id}. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline#operating_system SsmDefaultPatchBaseline#operating_system}. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline#id SsmDefaultPatchBaseline#id}. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `baselineId`<sup>Required</sup> <a name="baselineId" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.baselineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline#baseline_id SsmDefaultPatchBaseline#baseline_id}.

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.operatingSystem"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline#operating_system SsmDefaultPatchBaseline#operating_system}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline#id SsmDefaultPatchBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline#region SsmDefaultPatchBaseline#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmDefaultPatchBaseline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isConstruct"></a>

```java
import io.cdktn.providers.aws.ssm_default_patch_baseline.SsmDefaultPatchBaseline;

SsmDefaultPatchBaseline.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ssm_default_patch_baseline.SsmDefaultPatchBaseline;

SsmDefaultPatchBaseline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.ssm_default_patch_baseline.SsmDefaultPatchBaseline;

SsmDefaultPatchBaseline.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.ssm_default_patch_baseline.SsmDefaultPatchBaseline;

SsmDefaultPatchBaseline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsmDefaultPatchBaseline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SsmDefaultPatchBaseline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsmDefaultPatchBaseline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsmDefaultPatchBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SsmDefaultPatchBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.baselineIdInput">baselineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.operatingSystemInput">operatingSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.baselineId">baselineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `baselineIdInput`<sup>Optional</sup> <a name="baselineIdInput" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.baselineIdInput"></a>

```java
public java.lang.String getBaselineIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.operatingSystemInput"></a>

```java
public java.lang.String getOperatingSystemInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `baselineId`<sup>Required</sup> <a name="baselineId" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.baselineId"></a>

```java
public java.lang.String getBaselineId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsmDefaultPatchBaselineConfig <a name="SsmDefaultPatchBaselineConfig" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ssm_default_patch_baseline.SsmDefaultPatchBaselineConfig;

SsmDefaultPatchBaselineConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .baselineId(java.lang.String)
    .operatingSystem(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.baselineId">baselineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline#baseline_id SsmDefaultPatchBaseline#baseline_id}. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline#operating_system SsmDefaultPatchBaseline#operating_system}. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline#id SsmDefaultPatchBaseline#id}. |
| <code><a href="#@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `baselineId`<sup>Required</sup> <a name="baselineId" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.baselineId"></a>

```java
public java.lang.String getBaselineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline#baseline_id SsmDefaultPatchBaseline#baseline_id}.

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline#operating_system SsmDefaultPatchBaseline#operating_system}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline#id SsmDefaultPatchBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ssm_default_patch_baseline#region SsmDefaultPatchBaseline#region}

---



