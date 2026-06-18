# `ssmResourceDataSync` Submodule <a name="`ssmResourceDataSync` Submodule" id="@cdktn/provider-aws.ssmResourceDataSync"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmResourceDataSync <a name="SsmResourceDataSync" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync aws_ssm_resource_data_sync}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmResourceDataSync(Construct Scope, string Id, SsmResourceDataSyncConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig">SsmResourceDataSyncConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig">SsmResourceDataSyncConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.putS3Destination">PutS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutS3Destination` <a name="PutS3Destination" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.putS3Destination"></a>

```csharp
private void PutS3Destination(SsmResourceDataSyncS3Destination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmResourceDataSync resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsmResourceDataSync.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsmResourceDataSync.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsmResourceDataSync.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsmResourceDataSync.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsmResourceDataSync resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmResourceDataSync to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmResourceDataSync that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsmResourceDataSync to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference">SsmResourceDataSyncS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.s3DestinationInput">S3DestinationInput</a></code> | <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.s3Destination"></a>

```csharp
public SsmResourceDataSyncS3DestinationOutputReference S3Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference">SsmResourceDataSyncS3DestinationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `S3DestinationInput`<sup>Optional</sup> <a name="S3DestinationInput" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.s3DestinationInput"></a>

```csharp
public SsmResourceDataSyncS3Destination S3DestinationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmResourceDataSyncConfig <a name="SsmResourceDataSyncConfig" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmResourceDataSyncConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    SsmResourceDataSyncS3Destination S3Destination,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#name SsmResourceDataSync#name}. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | s3_destination block. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#id SsmResourceDataSync#id}. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#name SsmResourceDataSync#name}.

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.s3Destination"></a>

```csharp
public SsmResourceDataSyncS3Destination S3Destination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#id SsmResourceDataSync#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#region SsmResourceDataSync#region}

---

### SsmResourceDataSyncS3Destination <a name="SsmResourceDataSyncS3Destination" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmResourceDataSyncS3Destination {
    string BucketName,
    string Region,
    SsmResourceDataSyncS3DestinationDestinationDataSharing DestinationDataSharing = null,
    string KmsKeyArn = null,
    string Prefix = null,
    string SyncFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#region SsmResourceDataSync#region}. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.destinationDataSharing">DestinationDataSharing</a></code> | <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharing">SsmResourceDataSyncS3DestinationDestinationDataSharing</a></code> | destination_data_sharing block. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#prefix SsmResourceDataSync#prefix}. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.syncFormat">SyncFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#region SsmResourceDataSync#region}.

---

##### `DestinationDataSharing`<sup>Optional</sup> <a name="DestinationDataSharing" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.destinationDataSharing"></a>

```csharp
public SsmResourceDataSyncS3DestinationDestinationDataSharing DestinationDataSharing { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharing">SsmResourceDataSyncS3DestinationDestinationDataSharing</a>

destination_data_sharing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#destination_data_sharing SsmResourceDataSync#destination_data_sharing}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#prefix SsmResourceDataSync#prefix}.

---

##### `SyncFormat`<sup>Optional</sup> <a name="SyncFormat" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.syncFormat"></a>

```csharp
public string SyncFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}.

---

### SsmResourceDataSyncS3DestinationDestinationDataSharing <a name="SsmResourceDataSyncS3DestinationDestinationDataSharing" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharing.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmResourceDataSyncS3DestinationDestinationDataSharing {
    string DestinationDataSharingType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharing.property.destinationDataSharingType">DestinationDataSharingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#destination_data_sharing_type SsmResourceDataSync#destination_data_sharing_type}. |

---

##### `DestinationDataSharingType`<sup>Optional</sup> <a name="DestinationDataSharingType" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharing.property.destinationDataSharingType"></a>

```csharp
public string DestinationDataSharingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_resource_data_sync#destination_data_sharing_type SsmResourceDataSync#destination_data_sharing_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference <a name="SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.resetDestinationDataSharingType">ResetDestinationDataSharingType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationDataSharingType` <a name="ResetDestinationDataSharingType" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.resetDestinationDataSharingType"></a>

```csharp
private void ResetDestinationDataSharingType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.property.destinationDataSharingTypeInput">DestinationDataSharingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.property.destinationDataSharingType">DestinationDataSharingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharing">SsmResourceDataSyncS3DestinationDestinationDataSharing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationDataSharingTypeInput`<sup>Optional</sup> <a name="DestinationDataSharingTypeInput" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.property.destinationDataSharingTypeInput"></a>

```csharp
public string DestinationDataSharingTypeInput { get; }
```

- *Type:* string

---

##### `DestinationDataSharingType`<sup>Required</sup> <a name="DestinationDataSharingType" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.property.destinationDataSharingType"></a>

```csharp
public string DestinationDataSharingType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference.property.internalValue"></a>

```csharp
public SsmResourceDataSyncS3DestinationDestinationDataSharing InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharing">SsmResourceDataSyncS3DestinationDestinationDataSharing</a>

---


### SsmResourceDataSyncS3DestinationOutputReference <a name="SsmResourceDataSyncS3DestinationOutputReference" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmResourceDataSyncS3DestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.putDestinationDataSharing">PutDestinationDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetDestinationDataSharing">ResetDestinationDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetSyncFormat">ResetSyncFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationDataSharing` <a name="PutDestinationDataSharing" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.putDestinationDataSharing"></a>

```csharp
private void PutDestinationDataSharing(SsmResourceDataSyncS3DestinationDestinationDataSharing Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.putDestinationDataSharing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharing">SsmResourceDataSyncS3DestinationDestinationDataSharing</a>

---

##### `ResetDestinationDataSharing` <a name="ResetDestinationDataSharing" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetDestinationDataSharing"></a>

```csharp
private void ResetDestinationDataSharing()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetSyncFormat` <a name="ResetSyncFormat" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetSyncFormat"></a>

```csharp
private void ResetSyncFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.destinationDataSharing">DestinationDataSharing</a></code> | <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference">SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.destinationDataSharingInput">DestinationDataSharingInput</a></code> | <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharing">SsmResourceDataSyncS3DestinationDestinationDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormatInput">SyncFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormat">SyncFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationDataSharing`<sup>Required</sup> <a name="DestinationDataSharing" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.destinationDataSharing"></a>

```csharp
public SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference DestinationDataSharing { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference">SsmResourceDataSyncS3DestinationDestinationDataSharingOutputReference</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `DestinationDataSharingInput`<sup>Optional</sup> <a name="DestinationDataSharingInput" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.destinationDataSharingInput"></a>

```csharp
public SsmResourceDataSyncS3DestinationDestinationDataSharing DestinationDataSharingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationDestinationDataSharing">SsmResourceDataSyncS3DestinationDestinationDataSharing</a>

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SyncFormatInput`<sup>Optional</sup> <a name="SyncFormatInput" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormatInput"></a>

```csharp
public string SyncFormatInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SyncFormat`<sup>Required</sup> <a name="SyncFormat" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormat"></a>

```csharp
public string SyncFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.internalValue"></a>

```csharp
public SsmResourceDataSyncS3Destination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---



