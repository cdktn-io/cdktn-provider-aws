# `transferWebAppCustomization` Submodule <a name="`transferWebAppCustomization` Submodule" id="@cdktf/provider-aws.transferWebAppCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferWebAppCustomization <a name="TransferWebAppCustomization" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization aws_transfer_web_app_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_web_app_customization.TransferWebAppCustomization;

TransferWebAppCustomization.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .webAppId(java.lang.String)
//  .faviconFile(java.lang.String)
//  .logoFile(java.lang.String)
//  .region(java.lang.String)
//  .title(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.webAppId">webAppId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#web_app_id TransferWebAppCustomization#web_app_id}. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.faviconFile">faviconFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#favicon_file TransferWebAppCustomization#favicon_file}. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.logoFile">logoFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#logo_file TransferWebAppCustomization#logo_file}. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#title TransferWebAppCustomization#title}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `webAppId`<sup>Required</sup> <a name="webAppId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.webAppId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#web_app_id TransferWebAppCustomization#web_app_id}.

---

##### `faviconFile`<sup>Optional</sup> <a name="faviconFile" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.faviconFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#favicon_file TransferWebAppCustomization#favicon_file}.

---

##### `logoFile`<sup>Optional</sup> <a name="logoFile" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.logoFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#logo_file TransferWebAppCustomization#logo_file}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#region TransferWebAppCustomization#region}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#title TransferWebAppCustomization#title}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetFaviconFile">resetFaviconFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetLogoFile">resetLogoFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetFaviconFile` <a name="resetFaviconFile" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetFaviconFile"></a>

```java
public void resetFaviconFile()
```

##### `resetLogoFile` <a name="resetLogoFile" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetLogoFile"></a>

```java
public void resetLogoFile()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetTitle"></a>

```java
public void resetTitle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TransferWebAppCustomization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_web_app_customization.TransferWebAppCustomization;

TransferWebAppCustomization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_web_app_customization.TransferWebAppCustomization;

TransferWebAppCustomization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_web_app_customization.TransferWebAppCustomization;

TransferWebAppCustomization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_web_app_customization.TransferWebAppCustomization;

TransferWebAppCustomization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TransferWebAppCustomization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TransferWebAppCustomization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TransferWebAppCustomization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TransferWebAppCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TransferWebAppCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFileInput">faviconFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFileInput">logoFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppIdInput">webAppIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFile">faviconFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFile">logoFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppId">webAppId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `faviconFileInput`<sup>Optional</sup> <a name="faviconFileInput" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFileInput"></a>

```java
public java.lang.String getFaviconFileInput();
```

- *Type:* java.lang.String

---

##### `logoFileInput`<sup>Optional</sup> <a name="logoFileInput" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFileInput"></a>

```java
public java.lang.String getLogoFileInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `webAppIdInput`<sup>Optional</sup> <a name="webAppIdInput" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppIdInput"></a>

```java
public java.lang.String getWebAppIdInput();
```

- *Type:* java.lang.String

---

##### `faviconFile`<sup>Required</sup> <a name="faviconFile" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFile"></a>

```java
public java.lang.String getFaviconFile();
```

- *Type:* java.lang.String

---

##### `logoFile`<sup>Required</sup> <a name="logoFile" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFile"></a>

```java
public java.lang.String getLogoFile();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `webAppId`<sup>Required</sup> <a name="webAppId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppId"></a>

```java
public java.lang.String getWebAppId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransferWebAppCustomizationConfig <a name="TransferWebAppCustomizationConfig" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_web_app_customization.TransferWebAppCustomizationConfig;

TransferWebAppCustomizationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .webAppId(java.lang.String)
//  .faviconFile(java.lang.String)
//  .logoFile(java.lang.String)
//  .region(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.webAppId">webAppId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#web_app_id TransferWebAppCustomization#web_app_id}. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.faviconFile">faviconFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#favicon_file TransferWebAppCustomization#favicon_file}. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.logoFile">logoFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#logo_file TransferWebAppCustomization#logo_file}. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#title TransferWebAppCustomization#title}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `webAppId`<sup>Required</sup> <a name="webAppId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.webAppId"></a>

```java
public java.lang.String getWebAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#web_app_id TransferWebAppCustomization#web_app_id}.

---

##### `faviconFile`<sup>Optional</sup> <a name="faviconFile" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.faviconFile"></a>

```java
public java.lang.String getFaviconFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#favicon_file TransferWebAppCustomization#favicon_file}.

---

##### `logoFile`<sup>Optional</sup> <a name="logoFile" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.logoFile"></a>

```java
public java.lang.String getLogoFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#logo_file TransferWebAppCustomization#logo_file}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#region TransferWebAppCustomization#region}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/transfer_web_app_customization#title TransferWebAppCustomization#title}.

---



