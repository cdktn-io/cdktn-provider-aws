# `devopsguruResourceCollection` Submodule <a name="`devopsguruResourceCollection` Submodule" id="@cdktn/provider-aws.devopsguruResourceCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruResourceCollection <a name="DevopsguruResourceCollection" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/devopsguru_resource_collection aws_devopsguru_resource_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsguruResourceCollection(Construct Scope, string Id, DevopsguruResourceCollectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig">DevopsguruResourceCollectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig">DevopsguruResourceCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.putCloudformation">PutCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.resetCloudformation">ResetCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudformation` <a name="PutCloudformation" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.putCloudformation"></a>

```csharp
private void PutCloudformation(IResolvable|DevopsguruResourceCollectionCloudformation[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.putCloudformation.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformation">DevopsguruResourceCollectionCloudformation</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.putTags"></a>

```csharp
private void PutTags(IResolvable|DevopsguruResourceCollectionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTags">DevopsguruResourceCollectionTags</a>[]

---

##### `ResetCloudformation` <a name="ResetCloudformation" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.resetCloudformation"></a>

```csharp
private void ResetCloudformation()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsguruResourceCollection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DevopsguruResourceCollection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DevopsguruResourceCollection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DevopsguruResourceCollection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DevopsguruResourceCollection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DevopsguruResourceCollection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsguruResourceCollection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsguruResourceCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DevopsguruResourceCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.cloudformation">Cloudformation</a></code> | <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList">DevopsguruResourceCollectionCloudformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList">DevopsguruResourceCollectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.cloudformationInput">CloudformationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformation">DevopsguruResourceCollectionCloudformation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTags">DevopsguruResourceCollectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Cloudformation`<sup>Required</sup> <a name="Cloudformation" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.cloudformation"></a>

```csharp
public DevopsguruResourceCollectionCloudformationList Cloudformation { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList">DevopsguruResourceCollectionCloudformationList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.tags"></a>

```csharp
public DevopsguruResourceCollectionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList">DevopsguruResourceCollectionTagsList</a>

---

##### `CloudformationInput`<sup>Optional</sup> <a name="CloudformationInput" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.cloudformationInput"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionCloudformation[] CloudformationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformation">DevopsguruResourceCollectionCloudformation</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.tagsInput"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTags">DevopsguruResourceCollectionTags</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruResourceCollectionCloudformation <a name="DevopsguruResourceCollectionCloudformation" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsguruResourceCollectionCloudformation {
    string[] StackNames
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformation.property.stackNames">StackNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/devopsguru_resource_collection#stack_names DevopsguruResourceCollection#stack_names}. |

---

##### `StackNames`<sup>Required</sup> <a name="StackNames" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformation.property.stackNames"></a>

```csharp
public string[] StackNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/devopsguru_resource_collection#stack_names DevopsguruResourceCollection#stack_names}.

---

### DevopsguruResourceCollectionConfig <a name="DevopsguruResourceCollectionConfig" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsguruResourceCollectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Type,
    IResolvable|DevopsguruResourceCollectionCloudformation[] Cloudformation = null,
    string Region = null,
    IResolvable|DevopsguruResourceCollectionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/devopsguru_resource_collection#type DevopsguruResourceCollection#type}. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.cloudformation">Cloudformation</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformation">DevopsguruResourceCollectionCloudformation</a>[]</code> | cloudformation block. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTags">DevopsguruResourceCollectionTags</a>[]</code> | tags block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/devopsguru_resource_collection#type DevopsguruResourceCollection#type}.

---

##### `Cloudformation`<sup>Optional</sup> <a name="Cloudformation" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.cloudformation"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionCloudformation[] Cloudformation { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformation">DevopsguruResourceCollectionCloudformation</a>[]

cloudformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/devopsguru_resource_collection#cloudformation DevopsguruResourceCollection#cloudformation}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/devopsguru_resource_collection#region DevopsguruResourceCollection#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.tags"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTags">DevopsguruResourceCollectionTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/devopsguru_resource_collection#tags DevopsguruResourceCollection#tags}

---

### DevopsguruResourceCollectionTags <a name="DevopsguruResourceCollectionTags" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsguruResourceCollectionTags {
    string AppBoundaryKey,
    string[] TagValues
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTags.property.appBoundaryKey">AppBoundaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/devopsguru_resource_collection#app_boundary_key DevopsguruResourceCollection#app_boundary_key}. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTags.property.tagValues">TagValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/devopsguru_resource_collection#tag_values DevopsguruResourceCollection#tag_values}. |

---

##### `AppBoundaryKey`<sup>Required</sup> <a name="AppBoundaryKey" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTags.property.appBoundaryKey"></a>

```csharp
public string AppBoundaryKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/devopsguru_resource_collection#app_boundary_key DevopsguruResourceCollection#app_boundary_key}.

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTags.property.tagValues"></a>

```csharp
public string[] TagValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/devopsguru_resource_collection#tag_values DevopsguruResourceCollection#tag_values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruResourceCollectionCloudformationList <a name="DevopsguruResourceCollectionCloudformationList" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsguruResourceCollectionCloudformationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.get"></a>

```csharp
private DevopsguruResourceCollectionCloudformationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformation">DevopsguruResourceCollectionCloudformation</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationList.property.internalValue"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionCloudformation[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformation">DevopsguruResourceCollectionCloudformation</a>[]

---


### DevopsguruResourceCollectionCloudformationOutputReference <a name="DevopsguruResourceCollectionCloudformationOutputReference" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsguruResourceCollectionCloudformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.property.stackNamesInput">StackNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.property.stackNames">StackNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformation">DevopsguruResourceCollectionCloudformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StackNamesInput`<sup>Optional</sup> <a name="StackNamesInput" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.property.stackNamesInput"></a>

```csharp
public string[] StackNamesInput { get; }
```

- *Type:* string[]

---

##### `StackNames`<sup>Required</sup> <a name="StackNames" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.property.stackNames"></a>

```csharp
public string[] StackNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionCloudformation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionCloudformation">DevopsguruResourceCollectionCloudformation</a>

---


### DevopsguruResourceCollectionTagsList <a name="DevopsguruResourceCollectionTagsList" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsguruResourceCollectionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.get"></a>

```csharp
private DevopsguruResourceCollectionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTags">DevopsguruResourceCollectionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsList.property.internalValue"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTags">DevopsguruResourceCollectionTags</a>[]

---


### DevopsguruResourceCollectionTagsOutputReference <a name="DevopsguruResourceCollectionTagsOutputReference" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DevopsguruResourceCollectionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.property.appBoundaryKeyInput">AppBoundaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.property.tagValuesInput">TagValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.property.appBoundaryKey">AppBoundaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.property.tagValues">TagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTags">DevopsguruResourceCollectionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppBoundaryKeyInput`<sup>Optional</sup> <a name="AppBoundaryKeyInput" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.property.appBoundaryKeyInput"></a>

```csharp
public string AppBoundaryKeyInput { get; }
```

- *Type:* string

---

##### `TagValuesInput`<sup>Optional</sup> <a name="TagValuesInput" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.property.tagValuesInput"></a>

```csharp
public string[] TagValuesInput { get; }
```

- *Type:* string[]

---

##### `AppBoundaryKey`<sup>Required</sup> <a name="AppBoundaryKey" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.property.appBoundaryKey"></a>

```csharp
public string AppBoundaryKey { get; }
```

- *Type:* string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.property.tagValues"></a>

```csharp
public string[] TagValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsguruResourceCollectionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.devopsguruResourceCollection.DevopsguruResourceCollectionTags">DevopsguruResourceCollectionTags</a>

---



