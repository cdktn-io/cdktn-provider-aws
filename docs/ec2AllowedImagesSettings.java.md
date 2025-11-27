# `ec2AllowedImagesSettings` Submodule <a name="`ec2AllowedImagesSettings` Submodule" id="@cdktf/provider-aws.ec2AllowedImagesSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2AllowedImagesSettings <a name="Ec2AllowedImagesSettings" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings aws_ec2_allowed_images_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_allowed_images_settings.Ec2AllowedImagesSettings;

Ec2AllowedImagesSettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .state(java.lang.String)
//  .imageCriterion(IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterion>)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#state Ec2AllowedImagesSettings#state}. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.imageCriterion">imageCriterion</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>></code> | image_criterion block. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#state Ec2AllowedImagesSettings#state}.

---

##### `imageCriterion`<sup>Optional</sup> <a name="imageCriterion" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.imageCriterion"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>>

image_criterion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#image_criterion Ec2AllowedImagesSettings#image_criterion}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#region Ec2AllowedImagesSettings#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.putImageCriterion">putImageCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetImageCriterion">resetImageCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putImageCriterion` <a name="putImageCriterion" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.putImageCriterion"></a>

```java
public void putImageCriterion(IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.putImageCriterion.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>>

---

##### `resetImageCriterion` <a name="resetImageCriterion" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetImageCriterion"></a>

```java
public void resetImageCriterion()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2AllowedImagesSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_allowed_images_settings.Ec2AllowedImagesSettings;

Ec2AllowedImagesSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_allowed_images_settings.Ec2AllowedImagesSettings;

Ec2AllowedImagesSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_allowed_images_settings.Ec2AllowedImagesSettings;

Ec2AllowedImagesSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_allowed_images_settings.Ec2AllowedImagesSettings;

Ec2AllowedImagesSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2AllowedImagesSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Ec2AllowedImagesSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2AllowedImagesSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2AllowedImagesSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Ec2AllowedImagesSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.imageCriterion">imageCriterion</a></code> | <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList">Ec2AllowedImagesSettingsImageCriterionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.imageCriterionInput">imageCriterionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `imageCriterion`<sup>Required</sup> <a name="imageCriterion" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.imageCriterion"></a>

```java
public Ec2AllowedImagesSettingsImageCriterionList getImageCriterion();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList">Ec2AllowedImagesSettingsImageCriterionList</a>

---

##### `imageCriterionInput`<sup>Optional</sup> <a name="imageCriterionInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.imageCriterionInput"></a>

```java
public IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterion> getImageCriterionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2AllowedImagesSettingsConfig <a name="Ec2AllowedImagesSettingsConfig" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_allowed_images_settings.Ec2AllowedImagesSettingsConfig;

Ec2AllowedImagesSettingsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .state(java.lang.String)
//  .imageCriterion(IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterion>)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#state Ec2AllowedImagesSettings#state}. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.imageCriterion">imageCriterion</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>></code> | image_criterion block. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#state Ec2AllowedImagesSettings#state}.

---

##### `imageCriterion`<sup>Optional</sup> <a name="imageCriterion" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.imageCriterion"></a>

```java
public IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterion> getImageCriterion();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>>

image_criterion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#image_criterion Ec2AllowedImagesSettings#image_criterion}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#region Ec2AllowedImagesSettings#region}

---

### Ec2AllowedImagesSettingsImageCriterion <a name="Ec2AllowedImagesSettingsImageCriterion" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_allowed_images_settings.Ec2AllowedImagesSettingsImageCriterion;

Ec2AllowedImagesSettingsImageCriterion.builder()
//  .creationDateCondition(IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterionCreationDateCondition>)
//  .deprecationTimeCondition(IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition>)
//  .imageNames(java.util.List<java.lang.String>)
//  .imageProviders(java.util.List<java.lang.String>)
//  .marketplaceProductCodes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.creationDateCondition">creationDateCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>></code> | creation_date_condition block. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.deprecationTimeCondition">deprecationTimeCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>></code> | deprecation_time_condition block. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.imageNames">imageNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#image_names Ec2AllowedImagesSettings#image_names}. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.imageProviders">imageProviders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#image_providers Ec2AllowedImagesSettings#image_providers}. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.marketplaceProductCodes">marketplaceProductCodes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#marketplace_product_codes Ec2AllowedImagesSettings#marketplace_product_codes}. |

---

##### `creationDateCondition`<sup>Optional</sup> <a name="creationDateCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.creationDateCondition"></a>

```java
public IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterionCreationDateCondition> getCreationDateCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>>

creation_date_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#creation_date_condition Ec2AllowedImagesSettings#creation_date_condition}

---

##### `deprecationTimeCondition`<sup>Optional</sup> <a name="deprecationTimeCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.deprecationTimeCondition"></a>

```java
public IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition> getDeprecationTimeCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>>

deprecation_time_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#deprecation_time_condition Ec2AllowedImagesSettings#deprecation_time_condition}

---

##### `imageNames`<sup>Optional</sup> <a name="imageNames" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.imageNames"></a>

```java
public java.util.List<java.lang.String> getImageNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#image_names Ec2AllowedImagesSettings#image_names}.

---

##### `imageProviders`<sup>Optional</sup> <a name="imageProviders" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.imageProviders"></a>

```java
public java.util.List<java.lang.String> getImageProviders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#image_providers Ec2AllowedImagesSettings#image_providers}.

---

##### `marketplaceProductCodes`<sup>Optional</sup> <a name="marketplaceProductCodes" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.marketplaceProductCodes"></a>

```java
public java.util.List<java.lang.String> getMarketplaceProductCodes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#marketplace_product_codes Ec2AllowedImagesSettings#marketplace_product_codes}.

---

### Ec2AllowedImagesSettingsImageCriterionCreationDateCondition <a name="Ec2AllowedImagesSettingsImageCriterionCreationDateCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_allowed_images_settings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition;

Ec2AllowedImagesSettingsImageCriterionCreationDateCondition.builder()
//  .maximumDaysSinceCreated(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition.property.maximumDaysSinceCreated">maximumDaysSinceCreated</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#maximum_days_since_created Ec2AllowedImagesSettings#maximum_days_since_created}. |

---

##### `maximumDaysSinceCreated`<sup>Optional</sup> <a name="maximumDaysSinceCreated" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition.property.maximumDaysSinceCreated"></a>

```java
public java.lang.Number getMaximumDaysSinceCreated();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#maximum_days_since_created Ec2AllowedImagesSettings#maximum_days_since_created}.

---

### Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition <a name="Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_allowed_images_settings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition;

Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition.builder()
//  .maximumDaysSinceDeprecated(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition.property.maximumDaysSinceDeprecated">maximumDaysSinceDeprecated</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#maximum_days_since_deprecated Ec2AllowedImagesSettings#maximum_days_since_deprecated}. |

---

##### `maximumDaysSinceDeprecated`<sup>Optional</sup> <a name="maximumDaysSinceDeprecated" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition.property.maximumDaysSinceDeprecated"></a>

```java
public java.lang.Number getMaximumDaysSinceDeprecated();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#maximum_days_since_deprecated Ec2AllowedImagesSettings#maximum_days_since_deprecated}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList <a name="Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_allowed_images_settings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList;

new Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.get"></a>

```java
public Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterionCreationDateCondition> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>>

---


### Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference <a name="Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_allowed_images_settings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference;

new Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.resetMaximumDaysSinceCreated">resetMaximumDaysSinceCreated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumDaysSinceCreated` <a name="resetMaximumDaysSinceCreated" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.resetMaximumDaysSinceCreated"></a>

```java
public void resetMaximumDaysSinceCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.maximumDaysSinceCreatedInput">maximumDaysSinceCreatedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.maximumDaysSinceCreated">maximumDaysSinceCreated</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumDaysSinceCreatedInput`<sup>Optional</sup> <a name="maximumDaysSinceCreatedInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.maximumDaysSinceCreatedInput"></a>

```java
public java.lang.Number getMaximumDaysSinceCreatedInput();
```

- *Type:* java.lang.Number

---

##### `maximumDaysSinceCreated`<sup>Required</sup> <a name="maximumDaysSinceCreated" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.maximumDaysSinceCreated"></a>

```java
public java.lang.Number getMaximumDaysSinceCreated();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2AllowedImagesSettingsImageCriterionCreationDateCondition getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>

---


### Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList <a name="Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_allowed_images_settings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList;

new Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.get"></a>

```java
public Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>>

---


### Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference <a name="Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_allowed_images_settings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference;

new Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.resetMaximumDaysSinceDeprecated">resetMaximumDaysSinceDeprecated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumDaysSinceDeprecated` <a name="resetMaximumDaysSinceDeprecated" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.resetMaximumDaysSinceDeprecated"></a>

```java
public void resetMaximumDaysSinceDeprecated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.maximumDaysSinceDeprecatedInput">maximumDaysSinceDeprecatedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.maximumDaysSinceDeprecated">maximumDaysSinceDeprecated</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumDaysSinceDeprecatedInput`<sup>Optional</sup> <a name="maximumDaysSinceDeprecatedInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.maximumDaysSinceDeprecatedInput"></a>

```java
public java.lang.Number getMaximumDaysSinceDeprecatedInput();
```

- *Type:* java.lang.Number

---

##### `maximumDaysSinceDeprecated`<sup>Required</sup> <a name="maximumDaysSinceDeprecated" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.maximumDaysSinceDeprecated"></a>

```java
public java.lang.Number getMaximumDaysSinceDeprecated();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>

---


### Ec2AllowedImagesSettingsImageCriterionList <a name="Ec2AllowedImagesSettingsImageCriterionList" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_allowed_images_settings.Ec2AllowedImagesSettingsImageCriterionList;

new Ec2AllowedImagesSettingsImageCriterionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.get"></a>

```java
public Ec2AllowedImagesSettingsImageCriterionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterion> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>>

---


### Ec2AllowedImagesSettingsImageCriterionOutputReference <a name="Ec2AllowedImagesSettingsImageCriterionOutputReference" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_allowed_images_settings.Ec2AllowedImagesSettingsImageCriterionOutputReference;

new Ec2AllowedImagesSettingsImageCriterionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putCreationDateCondition">putCreationDateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putDeprecationTimeCondition">putDeprecationTimeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetCreationDateCondition">resetCreationDateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetDeprecationTimeCondition">resetDeprecationTimeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetImageNames">resetImageNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetImageProviders">resetImageProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetMarketplaceProductCodes">resetMarketplaceProductCodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCreationDateCondition` <a name="putCreationDateCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putCreationDateCondition"></a>

```java
public void putCreationDateCondition(IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterionCreationDateCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putCreationDateCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>>

---

##### `putDeprecationTimeCondition` <a name="putDeprecationTimeCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putDeprecationTimeCondition"></a>

```java
public void putDeprecationTimeCondition(IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putDeprecationTimeCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>>

---

##### `resetCreationDateCondition` <a name="resetCreationDateCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetCreationDateCondition"></a>

```java
public void resetCreationDateCondition()
```

##### `resetDeprecationTimeCondition` <a name="resetDeprecationTimeCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetDeprecationTimeCondition"></a>

```java
public void resetDeprecationTimeCondition()
```

##### `resetImageNames` <a name="resetImageNames" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetImageNames"></a>

```java
public void resetImageNames()
```

##### `resetImageProviders` <a name="resetImageProviders" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetImageProviders"></a>

```java
public void resetImageProviders()
```

##### `resetMarketplaceProductCodes` <a name="resetMarketplaceProductCodes" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetMarketplaceProductCodes"></a>

```java
public void resetMarketplaceProductCodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationDateCondition">creationDateCondition</a></code> | <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList">Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.deprecationTimeCondition">deprecationTimeCondition</a></code> | <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationDateConditionInput">creationDateConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.deprecationTimeConditionInput">deprecationTimeConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageNamesInput">imageNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageProvidersInput">imageProvidersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.marketplaceProductCodesInput">marketplaceProductCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageNames">imageNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageProviders">imageProviders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.marketplaceProductCodes">marketplaceProductCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `creationDateCondition`<sup>Required</sup> <a name="creationDateCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationDateCondition"></a>

```java
public Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList getCreationDateCondition();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList">Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList</a>

---

##### `deprecationTimeCondition`<sup>Required</sup> <a name="deprecationTimeCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.deprecationTimeCondition"></a>

```java
public Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList getDeprecationTimeCondition();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList</a>

---

##### `creationDateConditionInput`<sup>Optional</sup> <a name="creationDateConditionInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationDateConditionInput"></a>

```java
public IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterionCreationDateCondition> getCreationDateConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>>

---

##### `deprecationTimeConditionInput`<sup>Optional</sup> <a name="deprecationTimeConditionInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.deprecationTimeConditionInput"></a>

```java
public IResolvable|java.util.List<Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition> getDeprecationTimeConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>>

---

##### `imageNamesInput`<sup>Optional</sup> <a name="imageNamesInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageNamesInput"></a>

```java
public java.util.List<java.lang.String> getImageNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `imageProvidersInput`<sup>Optional</sup> <a name="imageProvidersInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageProvidersInput"></a>

```java
public java.util.List<java.lang.String> getImageProvidersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `marketplaceProductCodesInput`<sup>Optional</sup> <a name="marketplaceProductCodesInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.marketplaceProductCodesInput"></a>

```java
public java.util.List<java.lang.String> getMarketplaceProductCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `imageNames`<sup>Required</sup> <a name="imageNames" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageNames"></a>

```java
public java.util.List<java.lang.String> getImageNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `imageProviders`<sup>Required</sup> <a name="imageProviders" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageProviders"></a>

```java
public java.util.List<java.lang.String> getImageProviders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `marketplaceProductCodes`<sup>Required</sup> <a name="marketplaceProductCodes" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.marketplaceProductCodes"></a>

```java
public java.util.List<java.lang.String> getMarketplaceProductCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2AllowedImagesSettingsImageCriterion getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>

---



