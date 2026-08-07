# `ec2Host` Submodule <a name="`ec2Host` Submodule" id="@cdktn/provider-aws.ec2Host"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Host <a name="Ec2Host" id="@cdktn/provider-aws.ec2Host.Ec2Host"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host aws_ec2_host}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2Host.Ec2Host.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2Host(Construct Scope, string Id, Ec2HostConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig">Ec2HostConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2Host.Ec2Host.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2Host.Ec2Host.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ec2Host.Ec2Host.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig">Ec2HostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.resetAssetId">ResetAssetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.resetAutoPlacement">ResetAutoPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.resetHostRecovery">ResetHostRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.resetInstanceFamily">ResetInstanceFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.resetOutpostArn">ResetOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2Host.Ec2Host.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ec2Host.Ec2Host.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ec2Host.Ec2Host.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ec2Host.Ec2Host.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ec2Host.Ec2Host.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2Host.Ec2Host.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ec2Host.Ec2Host.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ec2Host.Ec2Host.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ec2Host.Ec2Host.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ec2Host.Ec2Host.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ec2Host.Ec2Host.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ec2Host.Ec2Host.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ec2Host.Ec2Host.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2Host.Ec2Host.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ec2Host.Ec2Host.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ec2Host.Ec2Host.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2Host.Ec2Host.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2Host.Ec2Host.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2Host.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ec2Host.Ec2Host.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2Host.Ec2Host.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ec2Host.Ec2Host.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2Host.Ec2Host.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ec2Host.Ec2Host.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ec2Host.Ec2Host.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2Host.Ec2Host.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.ec2Host.Ec2Host.putTimeouts"></a>

```csharp
private void PutTimeouts(Ec2HostTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2Host.Ec2Host.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeouts">Ec2HostTimeouts</a>

---

##### `ResetAssetId` <a name="ResetAssetId" id="@cdktn/provider-aws.ec2Host.Ec2Host.resetAssetId"></a>

```csharp
private void ResetAssetId()
```

##### `ResetAutoPlacement` <a name="ResetAutoPlacement" id="@cdktn/provider-aws.ec2Host.Ec2Host.resetAutoPlacement"></a>

```csharp
private void ResetAutoPlacement()
```

##### `ResetHostRecovery` <a name="ResetHostRecovery" id="@cdktn/provider-aws.ec2Host.Ec2Host.resetHostRecovery"></a>

```csharp
private void ResetHostRecovery()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.ec2Host.Ec2Host.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceFamily` <a name="ResetInstanceFamily" id="@cdktn/provider-aws.ec2Host.Ec2Host.resetInstanceFamily"></a>

```csharp
private void ResetInstanceFamily()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-aws.ec2Host.Ec2Host.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetOutpostArn` <a name="ResetOutpostArn" id="@cdktn/provider-aws.ec2Host.Ec2Host.resetOutpostArn"></a>

```csharp
private void ResetOutpostArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ec2Host.Ec2Host.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.ec2Host.Ec2Host.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.ec2Host.Ec2Host.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.ec2Host.Ec2Host.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2Host resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ec2Host.Ec2Host.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2Host.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2Host.Ec2Host.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ec2Host.Ec2Host.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2Host.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2Host.Ec2Host.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ec2Host.Ec2Host.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2Host.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2Host.Ec2Host.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ec2Host.Ec2Host.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2Host.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2Host resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2Host.Ec2Host.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ec2Host.Ec2Host.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2Host to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ec2Host.Ec2Host.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2Host that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2Host.Ec2Host.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Host to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference">Ec2HostTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.assetIdInput">AssetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.autoPlacementInput">AutoPlacementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.hostRecoveryInput">HostRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.instanceFamilyInput">InstanceFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.outpostArnInput">OutpostArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeouts">Ec2HostTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.assetId">AssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.autoPlacement">AutoPlacement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.hostRecovery">HostRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.instanceFamily">InstanceFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.timeouts"></a>

```csharp
public Ec2HostTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference">Ec2HostTimeoutsOutputReference</a>

---

##### `AssetIdInput`<sup>Optional</sup> <a name="AssetIdInput" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.assetIdInput"></a>

```csharp
public string AssetIdInput { get; }
```

- *Type:* string

---

##### `AutoPlacementInput`<sup>Optional</sup> <a name="AutoPlacementInput" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.autoPlacementInput"></a>

```csharp
public string AutoPlacementInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `HostRecoveryInput`<sup>Optional</sup> <a name="HostRecoveryInput" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.hostRecoveryInput"></a>

```csharp
public string HostRecoveryInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceFamilyInput`<sup>Optional</sup> <a name="InstanceFamilyInput" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.instanceFamilyInput"></a>

```csharp
public string InstanceFamilyInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `OutpostArnInput`<sup>Optional</sup> <a name="OutpostArnInput" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.outpostArnInput"></a>

```csharp
public string OutpostArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.timeoutsInput"></a>

```csharp
public IResolvable|Ec2HostTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeouts">Ec2HostTimeouts</a>

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.assetId"></a>

```csharp
public string AssetId { get; }
```

- *Type:* string

---

##### `AutoPlacement`<sup>Required</sup> <a name="AutoPlacement" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.autoPlacement"></a>

```csharp
public string AutoPlacement { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `HostRecovery`<sup>Required</sup> <a name="HostRecovery" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.hostRecovery"></a>

```csharp
public string HostRecovery { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceFamily`<sup>Required</sup> <a name="InstanceFamily" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.instanceFamily"></a>

```csharp
public string InstanceFamily { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2Host.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ec2Host.Ec2Host.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2HostConfig <a name="Ec2HostConfig" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2HostConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AvailabilityZone,
    string AssetId = null,
    string AutoPlacement = null,
    string HostRecovery = null,
    string Id = null,
    string InstanceFamily = null,
    string InstanceType = null,
    string OutpostArn = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    Ec2HostTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#availability_zone Ec2Host#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.assetId">AssetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#asset_id Ec2Host#asset_id}. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.autoPlacement">AutoPlacement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#auto_placement Ec2Host#auto_placement}. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.hostRecovery">HostRecovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#host_recovery Ec2Host#host_recovery}. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#id Ec2Host#id}. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.instanceFamily">InstanceFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#instance_family Ec2Host#instance_family}. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#instance_type Ec2Host#instance_type}. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.outpostArn">OutpostArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#outpost_arn Ec2Host#outpost_arn}. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#tags Ec2Host#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#tags_all Ec2Host#tags_all}. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeouts">Ec2HostTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#availability_zone Ec2Host#availability_zone}.

---

##### `AssetId`<sup>Optional</sup> <a name="AssetId" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.assetId"></a>

```csharp
public string AssetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#asset_id Ec2Host#asset_id}.

---

##### `AutoPlacement`<sup>Optional</sup> <a name="AutoPlacement" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.autoPlacement"></a>

```csharp
public string AutoPlacement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#auto_placement Ec2Host#auto_placement}.

---

##### `HostRecovery`<sup>Optional</sup> <a name="HostRecovery" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.hostRecovery"></a>

```csharp
public string HostRecovery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#host_recovery Ec2Host#host_recovery}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#id Ec2Host#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceFamily`<sup>Optional</sup> <a name="InstanceFamily" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.instanceFamily"></a>

```csharp
public string InstanceFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#instance_family Ec2Host#instance_family}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#instance_type Ec2Host#instance_type}.

---

##### `OutpostArn`<sup>Optional</sup> <a name="OutpostArn" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.outpostArn"></a>

```csharp
public string OutpostArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#outpost_arn Ec2Host#outpost_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#region Ec2Host#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#tags Ec2Host#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#tags_all Ec2Host#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.ec2Host.Ec2HostConfig.property.timeouts"></a>

```csharp
public Ec2HostTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeouts">Ec2HostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#timeouts Ec2Host#timeouts}

---

### Ec2HostTimeouts <a name="Ec2HostTimeouts" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2HostTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#create Ec2Host#create}. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#delete Ec2Host#delete}. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#update Ec2Host#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#create Ec2Host#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#delete Ec2Host#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_host#update Ec2Host#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2HostTimeoutsOutputReference <a name="Ec2HostTimeoutsOutputReference" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2HostTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeouts">Ec2HostTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ec2Host.Ec2HostTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2HostTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2Host.Ec2HostTimeouts">Ec2HostTimeouts</a>

---



