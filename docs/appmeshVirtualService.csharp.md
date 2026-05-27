# `appmeshVirtualService` Submodule <a name="`appmeshVirtualService` Submodule" id="@cdktn/provider-aws.appmeshVirtualService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshVirtualService <a name="AppmeshVirtualService" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service aws_appmesh_virtual_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppmeshVirtualService(Construct Scope, string Id, AppmeshVirtualServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig">AppmeshVirtualServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig">AppmeshVirtualServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetMeshOwner">ResetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSpec` <a name="PutSpec" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.putSpec"></a>

```csharp
private void PutSpec(AppmeshVirtualServiceSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMeshOwner` <a name="ResetMeshOwner" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetMeshOwner"></a>

```csharp
private void ResetMeshOwner()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppmeshVirtualService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppmeshVirtualService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppmeshVirtualService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppmeshVirtualService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppmeshVirtualService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppmeshVirtualService resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppmeshVirtualService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppmeshVirtualService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppmeshVirtualService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.resourceOwner">ResourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference">AppmeshVirtualServiceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshNameInput">MeshNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshOwnerInput">MeshOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.specInput">SpecInput</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshName">MeshName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshOwner">MeshOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.resourceOwner"></a>

```csharp
public string ResourceOwner { get; }
```

- *Type:* string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.spec"></a>

```csharp
public AppmeshVirtualServiceSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference">AppmeshVirtualServiceSpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MeshNameInput`<sup>Optional</sup> <a name="MeshNameInput" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshNameInput"></a>

```csharp
public string MeshNameInput { get; }
```

- *Type:* string

---

##### `MeshOwnerInput`<sup>Optional</sup> <a name="MeshOwnerInput" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshOwnerInput"></a>

```csharp
public string MeshOwnerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.specInput"></a>

```csharp
public AppmeshVirtualServiceSpec SpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshName"></a>

```csharp
public string MeshName { get; }
```

- *Type:* string

---

##### `MeshOwner`<sup>Required</sup> <a name="MeshOwner" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshOwner"></a>

```csharp
public string MeshOwner { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshVirtualServiceConfig <a name="AppmeshVirtualServiceConfig" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppmeshVirtualServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MeshName,
    string Name,
    AppmeshVirtualServiceSpec Spec,
    string Id = null,
    string MeshOwner = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.meshName">MeshName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#mesh_name AppmeshVirtualService#mesh_name}. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#name AppmeshVirtualService#name}. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a></code> | spec block. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#id AppmeshVirtualService#id}. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.meshOwner">MeshOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#mesh_owner AppmeshVirtualService#mesh_owner}. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#tags AppmeshVirtualService#tags}. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#tags_all AppmeshVirtualService#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.meshName"></a>

```csharp
public string MeshName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#mesh_name AppmeshVirtualService#mesh_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#name AppmeshVirtualService#name}.

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.spec"></a>

```csharp
public AppmeshVirtualServiceSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#spec AppmeshVirtualService#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#id AppmeshVirtualService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MeshOwner`<sup>Optional</sup> <a name="MeshOwner" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.meshOwner"></a>

```csharp
public string MeshOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#mesh_owner AppmeshVirtualService#mesh_owner}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#region AppmeshVirtualService#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#tags AppmeshVirtualService#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#tags_all AppmeshVirtualService#tags_all}.

---

### AppmeshVirtualServiceSpec <a name="AppmeshVirtualServiceSpec" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppmeshVirtualServiceSpec {
    AppmeshVirtualServiceSpecProvider Provider = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec.property.provider">Provider</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a></code> | provider block. |

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec.property.provider"></a>

```csharp
public AppmeshVirtualServiceSpecProvider Provider { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a>

provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#provider AppmeshVirtualService#provider}

---

### AppmeshVirtualServiceSpecProvider <a name="AppmeshVirtualServiceSpecProvider" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppmeshVirtualServiceSpecProvider {
    AppmeshVirtualServiceSpecProviderVirtualNode VirtualNode = null,
    AppmeshVirtualServiceSpecProviderVirtualRouter VirtualRouter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider.property.virtualNode">VirtualNode</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a></code> | virtual_node block. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider.property.virtualRouter">VirtualRouter</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a></code> | virtual_router block. |

---

##### `VirtualNode`<sup>Optional</sup> <a name="VirtualNode" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider.property.virtualNode"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualNode VirtualNode { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a>

virtual_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#virtual_node AppmeshVirtualService#virtual_node}

---

##### `VirtualRouter`<sup>Optional</sup> <a name="VirtualRouter" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider.property.virtualRouter"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualRouter VirtualRouter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a>

virtual_router block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#virtual_router AppmeshVirtualService#virtual_router}

---

### AppmeshVirtualServiceSpecProviderVirtualNode <a name="AppmeshVirtualServiceSpecProviderVirtualNode" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppmeshVirtualServiceSpecProviderVirtualNode {
    string VirtualNodeName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode.property.virtualNodeName">VirtualNodeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#virtual_node_name AppmeshVirtualService#virtual_node_name}. |

---

##### `VirtualNodeName`<sup>Required</sup> <a name="VirtualNodeName" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode.property.virtualNodeName"></a>

```csharp
public string VirtualNodeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#virtual_node_name AppmeshVirtualService#virtual_node_name}.

---

### AppmeshVirtualServiceSpecProviderVirtualRouter <a name="AppmeshVirtualServiceSpecProviderVirtualRouter" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppmeshVirtualServiceSpecProviderVirtualRouter {
    string VirtualRouterName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter.property.virtualRouterName">VirtualRouterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#virtual_router_name AppmeshVirtualService#virtual_router_name}. |

---

##### `VirtualRouterName`<sup>Required</sup> <a name="VirtualRouterName" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter.property.virtualRouterName"></a>

```csharp
public string VirtualRouterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appmesh_virtual_service#virtual_router_name AppmeshVirtualService#virtual_router_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshVirtualServiceSpecOutputReference <a name="AppmeshVirtualServiceSpecOutputReference" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppmeshVirtualServiceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.putProvider">PutProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.resetProvider">ResetProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProvider` <a name="PutProvider" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.putProvider"></a>

```csharp
private void PutProvider(AppmeshVirtualServiceSpecProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.putProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a>

---

##### `ResetProvider` <a name="ResetProvider" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.resetProvider"></a>

```csharp
private void ResetProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.provider">Provider</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference">AppmeshVirtualServiceSpecProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.providerInput">ProviderInput</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.provider"></a>

```csharp
public AppmeshVirtualServiceSpecProviderOutputReference Provider { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference">AppmeshVirtualServiceSpecProviderOutputReference</a>

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.providerInput"></a>

```csharp
public AppmeshVirtualServiceSpecProvider ProviderInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.internalValue"></a>

```csharp
public AppmeshVirtualServiceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a>

---


### AppmeshVirtualServiceSpecProviderOutputReference <a name="AppmeshVirtualServiceSpecProviderOutputReference" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppmeshVirtualServiceSpecProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualNode">PutVirtualNode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualRouter">PutVirtualRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resetVirtualNode">ResetVirtualNode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resetVirtualRouter">ResetVirtualRouter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVirtualNode` <a name="PutVirtualNode" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualNode"></a>

```csharp
private void PutVirtualNode(AppmeshVirtualServiceSpecProviderVirtualNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualNode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a>

---

##### `PutVirtualRouter` <a name="PutVirtualRouter" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualRouter"></a>

```csharp
private void PutVirtualRouter(AppmeshVirtualServiceSpecProviderVirtualRouter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualRouter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a>

---

##### `ResetVirtualNode` <a name="ResetVirtualNode" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resetVirtualNode"></a>

```csharp
private void ResetVirtualNode()
```

##### `ResetVirtualRouter` <a name="ResetVirtualRouter" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resetVirtualRouter"></a>

```csharp
private void ResetVirtualRouter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualNode">VirtualNode</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference">AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouter">VirtualRouter</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference">AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualNodeInput">VirtualNodeInput</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouterInput">VirtualRouterInput</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualNode`<sup>Required</sup> <a name="VirtualNode" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualNode"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference VirtualNode { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference">AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference</a>

---

##### `VirtualRouter`<sup>Required</sup> <a name="VirtualRouter" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouter"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference VirtualRouter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference">AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference</a>

---

##### `VirtualNodeInput`<sup>Optional</sup> <a name="VirtualNodeInput" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualNodeInput"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualNode VirtualNodeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a>

---

##### `VirtualRouterInput`<sup>Optional</sup> <a name="VirtualRouterInput" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouterInput"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualRouter VirtualRouterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.internalValue"></a>

```csharp
public AppmeshVirtualServiceSpecProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a>

---


### AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference <a name="AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeNameInput">VirtualNodeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeName">VirtualNodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualNodeNameInput`<sup>Optional</sup> <a name="VirtualNodeNameInput" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeNameInput"></a>

```csharp
public string VirtualNodeNameInput { get; }
```

- *Type:* string

---

##### `VirtualNodeName`<sup>Required</sup> <a name="VirtualNodeName" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeName"></a>

```csharp
public string VirtualNodeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.internalValue"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualNode InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a>

---


### AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference <a name="AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterNameInput">VirtualRouterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterName">VirtualRouterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualRouterNameInput`<sup>Optional</sup> <a name="VirtualRouterNameInput" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterNameInput"></a>

```csharp
public string VirtualRouterNameInput { get; }
```

- *Type:* string

---

##### `VirtualRouterName`<sup>Required</sup> <a name="VirtualRouterName" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterName"></a>

```csharp
public string VirtualRouterName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.internalValue"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualRouter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a>

---



