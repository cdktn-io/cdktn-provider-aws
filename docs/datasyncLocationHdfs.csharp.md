# `datasyncLocationHdfs` Submodule <a name="`datasyncLocationHdfs` Submodule" id="@cdktn/provider-aws.datasyncLocationHdfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationHdfs <a name="DatasyncLocationHdfs" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs aws_datasync_location_hdfs}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationHdfs(Construct Scope, string Id, DatasyncLocationHdfsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig">DatasyncLocationHdfsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig">DatasyncLocationHdfsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putNameNode">PutNameNode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration">PutQopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetBlockSize">ResetBlockSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKeytab">ResetKerberosKeytab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKeytabBase64">ResetKerberosKeytabBase64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKrb5Conf">ResetKerberosKrb5Conf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKrb5ConfBase64">ResetKerberosKrb5ConfBase64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosPrincipal">ResetKerberosPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKmsKeyProviderUri">ResetKmsKeyProviderUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetQopConfiguration">ResetQopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetReplicationFactor">ResetReplicationFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetSimpleUser">ResetSimpleUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetSubdirectory">ResetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNameNode` <a name="PutNameNode" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putNameNode"></a>

```csharp
private void PutNameNode(IResolvable|DatasyncLocationHdfsNameNode[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putNameNode.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>[]

---

##### `PutQopConfiguration` <a name="PutQopConfiguration" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration"></a>

```csharp
private void PutQopConfiguration(DatasyncLocationHdfsQopConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

---

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetAuthenticationType"></a>

```csharp
private void ResetAuthenticationType()
```

##### `ResetBlockSize` <a name="ResetBlockSize" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetBlockSize"></a>

```csharp
private void ResetBlockSize()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKerberosKeytab` <a name="ResetKerberosKeytab" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKeytab"></a>

```csharp
private void ResetKerberosKeytab()
```

##### `ResetKerberosKeytabBase64` <a name="ResetKerberosKeytabBase64" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKeytabBase64"></a>

```csharp
private void ResetKerberosKeytabBase64()
```

##### `ResetKerberosKrb5Conf` <a name="ResetKerberosKrb5Conf" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKrb5Conf"></a>

```csharp
private void ResetKerberosKrb5Conf()
```

##### `ResetKerberosKrb5ConfBase64` <a name="ResetKerberosKrb5ConfBase64" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKrb5ConfBase64"></a>

```csharp
private void ResetKerberosKrb5ConfBase64()
```

##### `ResetKerberosPrincipal` <a name="ResetKerberosPrincipal" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosPrincipal"></a>

```csharp
private void ResetKerberosPrincipal()
```

##### `ResetKmsKeyProviderUri` <a name="ResetKmsKeyProviderUri" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKmsKeyProviderUri"></a>

```csharp
private void ResetKmsKeyProviderUri()
```

##### `ResetQopConfiguration` <a name="ResetQopConfiguration" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetQopConfiguration"></a>

```csharp
private void ResetQopConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReplicationFactor` <a name="ResetReplicationFactor" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetReplicationFactor"></a>

```csharp
private void ResetReplicationFactor()
```

##### `ResetSimpleUser` <a name="ResetSimpleUser" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetSimpleUser"></a>

```csharp
private void ResetSimpleUser()
```

##### `ResetSubdirectory` <a name="ResetSubdirectory" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetSubdirectory"></a>

```csharp
private void ResetSubdirectory()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationHdfs resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationHdfs.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationHdfs.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationHdfs.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationHdfs.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatasyncLocationHdfs resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncLocationHdfs to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncLocationHdfs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationHdfs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNode">NameNode</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList">DatasyncLocationHdfsNameNodeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfiguration">QopConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference">DatasyncLocationHdfsQopConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArnsInput">AgentArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSizeInput">BlockSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytabBase64Input">KerberosKeytabBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytabInput">KerberosKeytabInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5ConfBase64Input">KerberosKrb5ConfBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5ConfInput">KerberosKrb5ConfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipalInput">KerberosPrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUriInput">KmsKeyProviderUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNodeInput">NameNodeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfigurationInput">QopConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactorInput">ReplicationFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUserInput">SimpleUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectoryInput">SubdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArns">AgentArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSize">BlockSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytab">KerberosKeytab</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytabBase64">KerberosKeytabBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5Conf">KerberosKrb5Conf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5ConfBase64">KerberosKrb5ConfBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipal">KerberosPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUri">KmsKeyProviderUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactor">ReplicationFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUser">SimpleUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectory">Subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `NameNode`<sup>Required</sup> <a name="NameNode" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNode"></a>

```csharp
public DatasyncLocationHdfsNameNodeList NameNode { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList">DatasyncLocationHdfsNameNodeList</a>

---

##### `QopConfiguration`<sup>Required</sup> <a name="QopConfiguration" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfiguration"></a>

```csharp
public DatasyncLocationHdfsQopConfigurationOutputReference QopConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference">DatasyncLocationHdfsQopConfigurationOutputReference</a>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `AgentArnsInput`<sup>Optional</sup> <a name="AgentArnsInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArnsInput"></a>

```csharp
public string[] AgentArnsInput { get; }
```

- *Type:* string[]

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `BlockSizeInput`<sup>Optional</sup> <a name="BlockSizeInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSizeInput"></a>

```csharp
public double BlockSizeInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KerberosKeytabBase64Input`<sup>Optional</sup> <a name="KerberosKeytabBase64Input" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytabBase64Input"></a>

```csharp
public string KerberosKeytabBase64Input { get; }
```

- *Type:* string

---

##### `KerberosKeytabInput`<sup>Optional</sup> <a name="KerberosKeytabInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytabInput"></a>

```csharp
public string KerberosKeytabInput { get; }
```

- *Type:* string

---

##### `KerberosKrb5ConfBase64Input`<sup>Optional</sup> <a name="KerberosKrb5ConfBase64Input" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5ConfBase64Input"></a>

```csharp
public string KerberosKrb5ConfBase64Input { get; }
```

- *Type:* string

---

##### `KerberosKrb5ConfInput`<sup>Optional</sup> <a name="KerberosKrb5ConfInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5ConfInput"></a>

```csharp
public string KerberosKrb5ConfInput { get; }
```

- *Type:* string

---

##### `KerberosPrincipalInput`<sup>Optional</sup> <a name="KerberosPrincipalInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipalInput"></a>

```csharp
public string KerberosPrincipalInput { get; }
```

- *Type:* string

---

##### `KmsKeyProviderUriInput`<sup>Optional</sup> <a name="KmsKeyProviderUriInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUriInput"></a>

```csharp
public string KmsKeyProviderUriInput { get; }
```

- *Type:* string

---

##### `NameNodeInput`<sup>Optional</sup> <a name="NameNodeInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNodeInput"></a>

```csharp
public IResolvable|DatasyncLocationHdfsNameNode[] NameNodeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>[]

---

##### `QopConfigurationInput`<sup>Optional</sup> <a name="QopConfigurationInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfigurationInput"></a>

```csharp
public DatasyncLocationHdfsQopConfiguration QopConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReplicationFactorInput`<sup>Optional</sup> <a name="ReplicationFactorInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactorInput"></a>

```csharp
public double ReplicationFactorInput { get; }
```

- *Type:* double

---

##### `SimpleUserInput`<sup>Optional</sup> <a name="SimpleUserInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUserInput"></a>

```csharp
public string SimpleUserInput { get; }
```

- *Type:* string

---

##### `SubdirectoryInput`<sup>Optional</sup> <a name="SubdirectoryInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectoryInput"></a>

```csharp
public string SubdirectoryInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AgentArns`<sup>Required</sup> <a name="AgentArns" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArns"></a>

```csharp
public string[] AgentArns { get; }
```

- *Type:* string[]

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `BlockSize`<sup>Required</sup> <a name="BlockSize" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSize"></a>

```csharp
public double BlockSize { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KerberosKeytab`<sup>Required</sup> <a name="KerberosKeytab" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytab"></a>

```csharp
public string KerberosKeytab { get; }
```

- *Type:* string

---

##### `KerberosKeytabBase64`<sup>Required</sup> <a name="KerberosKeytabBase64" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytabBase64"></a>

```csharp
public string KerberosKeytabBase64 { get; }
```

- *Type:* string

---

##### `KerberosKrb5Conf`<sup>Required</sup> <a name="KerberosKrb5Conf" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5Conf"></a>

```csharp
public string KerberosKrb5Conf { get; }
```

- *Type:* string

---

##### `KerberosKrb5ConfBase64`<sup>Required</sup> <a name="KerberosKrb5ConfBase64" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5ConfBase64"></a>

```csharp
public string KerberosKrb5ConfBase64 { get; }
```

- *Type:* string

---

##### `KerberosPrincipal`<sup>Required</sup> <a name="KerberosPrincipal" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipal"></a>

```csharp
public string KerberosPrincipal { get; }
```

- *Type:* string

---

##### `KmsKeyProviderUri`<sup>Required</sup> <a name="KmsKeyProviderUri" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUri"></a>

```csharp
public string KmsKeyProviderUri { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReplicationFactor`<sup>Required</sup> <a name="ReplicationFactor" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactor"></a>

```csharp
public double ReplicationFactor { get; }
```

- *Type:* double

---

##### `SimpleUser`<sup>Required</sup> <a name="SimpleUser" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUser"></a>

```csharp
public string SimpleUser { get; }
```

- *Type:* string

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectory"></a>

```csharp
public string Subdirectory { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationHdfsConfig <a name="DatasyncLocationHdfsConfig" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationHdfsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AgentArns,
    IResolvable|DatasyncLocationHdfsNameNode[] NameNode,
    string AuthenticationType = null,
    double BlockSize = null,
    string Id = null,
    string KerberosKeytab = null,
    string KerberosKeytabBase64 = null,
    string KerberosKrb5Conf = null,
    string KerberosKrb5ConfBase64 = null,
    string KerberosPrincipal = null,
    string KmsKeyProviderUri = null,
    DatasyncLocationHdfsQopConfiguration QopConfiguration = null,
    string Region = null,
    double ReplicationFactor = null,
    string SimpleUser = null,
    string Subdirectory = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.agentArns">AgentArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#agent_arns DatasyncLocationHdfs#agent_arns}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.nameNode">NameNode</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>[]</code> | name_node block. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#authentication_type DatasyncLocationHdfs#authentication_type}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.blockSize">BlockSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#block_size DatasyncLocationHdfs#block_size}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#id DatasyncLocationHdfs#id}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKeytab">KerberosKeytab</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#kerberos_keytab DatasyncLocationHdfs#kerberos_keytab}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKeytabBase64">KerberosKeytabBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#kerberos_keytab_base64 DatasyncLocationHdfs#kerberos_keytab_base64}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKrb5Conf">KerberosKrb5Conf</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#kerberos_krb5_conf DatasyncLocationHdfs#kerberos_krb5_conf}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKrb5ConfBase64">KerberosKrb5ConfBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#kerberos_krb5_conf_base64 DatasyncLocationHdfs#kerberos_krb5_conf_base64}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosPrincipal">KerberosPrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#kerberos_principal DatasyncLocationHdfs#kerberos_principal}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kmsKeyProviderUri">KmsKeyProviderUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#kms_key_provider_uri DatasyncLocationHdfs#kms_key_provider_uri}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.qopConfiguration">QopConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | qop_configuration block. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.replicationFactor">ReplicationFactor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#replication_factor DatasyncLocationHdfs#replication_factor}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.simpleUser">SimpleUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#simple_user DatasyncLocationHdfs#simple_user}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.subdirectory">Subdirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#subdirectory DatasyncLocationHdfs#subdirectory}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#tags DatasyncLocationHdfs#tags}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#tags_all DatasyncLocationHdfs#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentArns`<sup>Required</sup> <a name="AgentArns" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.agentArns"></a>

```csharp
public string[] AgentArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#agent_arns DatasyncLocationHdfs#agent_arns}.

---

##### `NameNode`<sup>Required</sup> <a name="NameNode" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.nameNode"></a>

```csharp
public IResolvable|DatasyncLocationHdfsNameNode[] NameNode { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>[]

name_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#name_node DatasyncLocationHdfs#name_node}

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#authentication_type DatasyncLocationHdfs#authentication_type}.

---

##### `BlockSize`<sup>Optional</sup> <a name="BlockSize" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.blockSize"></a>

```csharp
public double BlockSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#block_size DatasyncLocationHdfs#block_size}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#id DatasyncLocationHdfs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KerberosKeytab`<sup>Optional</sup> <a name="KerberosKeytab" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKeytab"></a>

```csharp
public string KerberosKeytab { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#kerberos_keytab DatasyncLocationHdfs#kerberos_keytab}.

---

##### `KerberosKeytabBase64`<sup>Optional</sup> <a name="KerberosKeytabBase64" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKeytabBase64"></a>

```csharp
public string KerberosKeytabBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#kerberos_keytab_base64 DatasyncLocationHdfs#kerberos_keytab_base64}.

---

##### `KerberosKrb5Conf`<sup>Optional</sup> <a name="KerberosKrb5Conf" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKrb5Conf"></a>

```csharp
public string KerberosKrb5Conf { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#kerberos_krb5_conf DatasyncLocationHdfs#kerberos_krb5_conf}.

---

##### `KerberosKrb5ConfBase64`<sup>Optional</sup> <a name="KerberosKrb5ConfBase64" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKrb5ConfBase64"></a>

```csharp
public string KerberosKrb5ConfBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#kerberos_krb5_conf_base64 DatasyncLocationHdfs#kerberos_krb5_conf_base64}.

---

##### `KerberosPrincipal`<sup>Optional</sup> <a name="KerberosPrincipal" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosPrincipal"></a>

```csharp
public string KerberosPrincipal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#kerberos_principal DatasyncLocationHdfs#kerberos_principal}.

---

##### `KmsKeyProviderUri`<sup>Optional</sup> <a name="KmsKeyProviderUri" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kmsKeyProviderUri"></a>

```csharp
public string KmsKeyProviderUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#kms_key_provider_uri DatasyncLocationHdfs#kms_key_provider_uri}.

---

##### `QopConfiguration`<sup>Optional</sup> <a name="QopConfiguration" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.qopConfiguration"></a>

```csharp
public DatasyncLocationHdfsQopConfiguration QopConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

qop_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#qop_configuration DatasyncLocationHdfs#qop_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#region DatasyncLocationHdfs#region}

---

##### `ReplicationFactor`<sup>Optional</sup> <a name="ReplicationFactor" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.replicationFactor"></a>

```csharp
public double ReplicationFactor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#replication_factor DatasyncLocationHdfs#replication_factor}.

---

##### `SimpleUser`<sup>Optional</sup> <a name="SimpleUser" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.simpleUser"></a>

```csharp
public string SimpleUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#simple_user DatasyncLocationHdfs#simple_user}.

---

##### `Subdirectory`<sup>Optional</sup> <a name="Subdirectory" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.subdirectory"></a>

```csharp
public string Subdirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#subdirectory DatasyncLocationHdfs#subdirectory}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#tags DatasyncLocationHdfs#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#tags_all DatasyncLocationHdfs#tags_all}.

---

### DatasyncLocationHdfsNameNode <a name="DatasyncLocationHdfsNameNode" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationHdfsNameNode {
    string Hostname,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#hostname DatasyncLocationHdfs#hostname}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#port DatasyncLocationHdfs#port}. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#hostname DatasyncLocationHdfs#hostname}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#port DatasyncLocationHdfs#port}.

---

### DatasyncLocationHdfsQopConfiguration <a name="DatasyncLocationHdfsQopConfiguration" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationHdfsQopConfiguration {
    string DataTransferProtection = null,
    string RpcProtection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.dataTransferProtection">DataTransferProtection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#data_transfer_protection DatasyncLocationHdfs#data_transfer_protection}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.rpcProtection">RpcProtection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#rpc_protection DatasyncLocationHdfs#rpc_protection}. |

---

##### `DataTransferProtection`<sup>Optional</sup> <a name="DataTransferProtection" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.dataTransferProtection"></a>

```csharp
public string DataTransferProtection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#data_transfer_protection DatasyncLocationHdfs#data_transfer_protection}.

---

##### `RpcProtection`<sup>Optional</sup> <a name="RpcProtection" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.rpcProtection"></a>

```csharp
public string RpcProtection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/datasync_location_hdfs#rpc_protection DatasyncLocationHdfs#rpc_protection}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationHdfsNameNodeList <a name="DatasyncLocationHdfsNameNodeList" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationHdfsNameNodeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.get"></a>

```csharp
private DatasyncLocationHdfsNameNodeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.internalValue"></a>

```csharp
public IResolvable|DatasyncLocationHdfsNameNode[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>[]

---


### DatasyncLocationHdfsNameNodeOutputReference <a name="DatasyncLocationHdfsNameNodeOutputReference" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationHdfsNameNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatasyncLocationHdfsNameNode InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>

---


### DatasyncLocationHdfsQopConfigurationOutputReference <a name="DatasyncLocationHdfsQopConfigurationOutputReference" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationHdfsQopConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetDataTransferProtection">ResetDataTransferProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetRpcProtection">ResetRpcProtection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataTransferProtection` <a name="ResetDataTransferProtection" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetDataTransferProtection"></a>

```csharp
private void ResetDataTransferProtection()
```

##### `ResetRpcProtection` <a name="ResetRpcProtection" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetRpcProtection"></a>

```csharp
private void ResetRpcProtection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtectionInput">DataTransferProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtectionInput">RpcProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtection">DataTransferProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtection">RpcProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataTransferProtectionInput`<sup>Optional</sup> <a name="DataTransferProtectionInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtectionInput"></a>

```csharp
public string DataTransferProtectionInput { get; }
```

- *Type:* string

---

##### `RpcProtectionInput`<sup>Optional</sup> <a name="RpcProtectionInput" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtectionInput"></a>

```csharp
public string RpcProtectionInput { get; }
```

- *Type:* string

---

##### `DataTransferProtection`<sup>Required</sup> <a name="DataTransferProtection" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtection"></a>

```csharp
public string DataTransferProtection { get; }
```

- *Type:* string

---

##### `RpcProtection`<sup>Required</sup> <a name="RpcProtection" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtection"></a>

```csharp
public string RpcProtection { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.internalValue"></a>

```csharp
public DatasyncLocationHdfsQopConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

---



