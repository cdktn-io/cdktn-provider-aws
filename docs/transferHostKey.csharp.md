# `transferHostKey` Submodule <a name="`transferHostKey` Submodule" id="@cdktf/provider-aws.transferHostKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferHostKey <a name="TransferHostKey" id="@cdktf/provider-aws.transferHostKey.TransferHostKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key aws_transfer_host_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferHostKey(Construct Scope, string Id, TransferHostKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig">TransferHostKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig">TransferHostKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.resetHostKeyBody">ResetHostKeyBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.resetHostKeyBodyWo">ResetHostKeyBodyWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHostKeyBody` <a name="ResetHostKeyBody" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.resetHostKeyBody"></a>

```csharp
private void ResetHostKeyBody()
```

##### `ResetHostKeyBodyWo` <a name="ResetHostKeyBodyWo" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.resetHostKeyBodyWo"></a>

```csharp
private void ResetHostKeyBodyWo()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TransferHostKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferHostKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferHostKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferHostKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferHostKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TransferHostKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferHostKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferHostKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TransferHostKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.hostKeyFingerprint">HostKeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.hostKeyId">HostKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.hostKeyBodyInput">HostKeyBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.hostKeyBodyWoInput">HostKeyBodyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.hostKeyBody">HostKeyBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.hostKeyBodyWo">HostKeyBodyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HostKeyFingerprint`<sup>Required</sup> <a name="HostKeyFingerprint" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.hostKeyFingerprint"></a>

```csharp
public string HostKeyFingerprint { get; }
```

- *Type:* string

---

##### `HostKeyId`<sup>Required</sup> <a name="HostKeyId" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.hostKeyId"></a>

```csharp
public string HostKeyId { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HostKeyBodyInput`<sup>Optional</sup> <a name="HostKeyBodyInput" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.hostKeyBodyInput"></a>

```csharp
public string HostKeyBodyInput { get; }
```

- *Type:* string

---

##### `HostKeyBodyWoInput`<sup>Optional</sup> <a name="HostKeyBodyWoInput" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.hostKeyBodyWoInput"></a>

```csharp
public string HostKeyBodyWoInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HostKeyBody`<sup>Required</sup> <a name="HostKeyBody" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.hostKeyBody"></a>

```csharp
public string HostKeyBody { get; }
```

- *Type:* string

---

##### `HostKeyBodyWo`<sup>Required</sup> <a name="HostKeyBodyWo" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.hostKeyBodyWo"></a>

```csharp
public string HostKeyBodyWo { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.transferHostKey.TransferHostKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferHostKeyConfig <a name="TransferHostKeyConfig" id="@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferHostKeyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ServerId,
    string Description = null,
    string HostKeyBody = null,
    string HostKeyBodyWo = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.serverId">ServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#server_id TransferHostKey#server_id}. |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#description TransferHostKey#description}. |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.hostKeyBody">HostKeyBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#host_key_body TransferHostKey#host_key_body}. |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.hostKeyBodyWo">HostKeyBodyWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#host_key_body_wo TransferHostKey#host_key_body_wo}. |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#tags TransferHostKey#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#server_id TransferHostKey#server_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#description TransferHostKey#description}.

---

##### `HostKeyBody`<sup>Optional</sup> <a name="HostKeyBody" id="@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.hostKeyBody"></a>

```csharp
public string HostKeyBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#host_key_body TransferHostKey#host_key_body}.

---

##### `HostKeyBodyWo`<sup>Optional</sup> <a name="HostKeyBodyWo" id="@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.hostKeyBodyWo"></a>

```csharp
public string HostKeyBodyWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#host_key_body_wo TransferHostKey#host_key_body_wo}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#region TransferHostKey#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.transferHostKey.TransferHostKeyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#tags TransferHostKey#tags}.

---



