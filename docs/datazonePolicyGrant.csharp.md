# `datazonePolicyGrant` Submodule <a name="`datazonePolicyGrant` Submodule" id="@cdktn/provider-aws.datazonePolicyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazonePolicyGrant <a name="DatazonePolicyGrant" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant aws_datazone_policy_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrant(Construct Scope, string Id, DatazonePolicyGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig">DatazonePolicyGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig">DatazonePolicyGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putDetail">PutDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetDetail">ResetDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetPrincipal">ResetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetail` <a name="PutDetail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putDetail"></a>

```csharp
private void PutDetail(IResolvable|DatazonePolicyGrantDetail[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putDetail.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>[]

---

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putPrincipal"></a>

```csharp
private void PutPrincipal(IResolvable|DatazonePolicyGrantPrincipal[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putPrincipal.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>[]

---

##### `ResetDetail` <a name="ResetDetail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetDetail"></a>

```csharp
private void ResetDetail()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetPrincipal"></a>

```csharp
private void ResetPrincipal()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatazonePolicyGrant resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatazonePolicyGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatazonePolicyGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatazonePolicyGrant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatazonePolicyGrant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatazonePolicyGrant resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazonePolicyGrant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazonePolicyGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatazonePolicyGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.detail">Detail</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList">DatazonePolicyGrantDetailList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.grantId">GrantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList">DatazonePolicyGrantPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.detailInput">DetailInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifierInput">EntityIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityTypeInput">EntityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.principalInput">PrincipalInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifier">EntityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.detail"></a>

```csharp
public DatazonePolicyGrantDetailList Detail { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList">DatazonePolicyGrantDetailList</a>

---

##### `GrantId`<sup>Required</sup> <a name="GrantId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.grantId"></a>

```csharp
public string GrantId { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.principal"></a>

```csharp
public DatazonePolicyGrantPrincipalList Principal { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList">DatazonePolicyGrantPrincipalList</a>

---

##### `DetailInput`<sup>Optional</sup> <a name="DetailInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.detailInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetail[] DetailInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>[]

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifierInput"></a>

```csharp
public string DomainIdentifierInput { get; }
```

- *Type:* string

---

##### `EntityIdentifierInput`<sup>Optional</sup> <a name="EntityIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifierInput"></a>

```csharp
public string EntityIdentifierInput { get; }
```

- *Type:* string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityTypeInput"></a>

```csharp
public string EntityTypeInput { get; }
```

- *Type:* string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.principalInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipal[] PrincipalInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; }
```

- *Type:* string

---

##### `EntityIdentifier`<sup>Required</sup> <a name="EntityIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifier"></a>

```csharp
public string EntityIdentifier { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazonePolicyGrantConfig <a name="DatazonePolicyGrantConfig" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainIdentifier,
    string EntityIdentifier,
    string EntityType,
    string PolicyType,
    IResolvable|DatazonePolicyGrantDetail[] Detail = null,
    IResolvable|DatazonePolicyGrantPrincipal[] Principal = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_identifier DatazonePolicyGrant#domain_identifier}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityIdentifier">EntityIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_identifier DatazonePolicyGrant#entity_identifier}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityType">EntityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_type DatazonePolicyGrant#entity_type}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.policyType">PolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#policy_type DatazonePolicyGrant#policy_type}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.detail">Detail</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>[]</code> | detail block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.principal">Principal</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>[]</code> | principal block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_identifier DatazonePolicyGrant#domain_identifier}.

---

##### `EntityIdentifier`<sup>Required</sup> <a name="EntityIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityIdentifier"></a>

```csharp
public string EntityIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_identifier DatazonePolicyGrant#entity_identifier}.

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityType"></a>

```csharp
public string EntityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_type DatazonePolicyGrant#entity_type}.

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#policy_type DatazonePolicyGrant#policy_type}.

---

##### `Detail`<sup>Optional</sup> <a name="Detail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.detail"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetail[] Detail { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>[]

detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#detail DatazonePolicyGrant#detail}

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.principal"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipal[] Principal { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>[]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#principal DatazonePolicyGrant#principal}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#region DatazonePolicyGrant#region}

---

### DatazonePolicyGrantDetail <a name="DatazonePolicyGrantDetail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetail {
    IResolvable|DatazonePolicyGrantDetailAddToProjectMemberPool[] AddToProjectMemberPool = null,
    IResolvable|DatazonePolicyGrantDetailCreateAssetType[] CreateAssetType = null,
    IResolvable|DatazonePolicyGrantDetailCreateDomainUnit[] CreateDomainUnit = null,
    IResolvable|DatazonePolicyGrantDetailCreateEnvironment[] CreateEnvironment = null,
    IResolvable|DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint[] CreateEnvironmentFromBlueprint = null,
    IResolvable|DatazonePolicyGrantDetailCreateEnvironmentProfile[] CreateEnvironmentProfile = null,
    IResolvable|DatazonePolicyGrantDetailCreateFormType[] CreateFormType = null,
    IResolvable|DatazonePolicyGrantDetailCreateGlossary[] CreateGlossary = null,
    IResolvable|DatazonePolicyGrantDetailCreateProject[] CreateProject = null,
    IResolvable|DatazonePolicyGrantDetailCreateProjectFromProjectProfile[] CreateProjectFromProjectProfile = null,
    IResolvable|DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile[] DelegateCreateEnvironmentProfile = null,
    IResolvable|DatazonePolicyGrantDetailOverrideDomainUnitOwners[] OverrideDomainUnitOwners = null,
    IResolvable|DatazonePolicyGrantDetailOverrideProjectOwners[] OverrideProjectOwners = null,
    IResolvable|DatazonePolicyGrantDetailUseAssetType[] UseAssetType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.addToProjectMemberPool">AddToProjectMemberPool</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>[]</code> | add_to_project_member_pool block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createAssetType">CreateAssetType</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>[]</code> | create_asset_type block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createDomainUnit">CreateDomainUnit</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>[]</code> | create_domain_unit block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironment">CreateEnvironment</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>[]</code> | create_environment block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentFromBlueprint">CreateEnvironmentFromBlueprint</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>[]</code> | create_environment_from_blueprint block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentProfile">CreateEnvironmentProfile</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>[]</code> | create_environment_profile block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createFormType">CreateFormType</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>[]</code> | create_form_type block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createGlossary">CreateGlossary</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>[]</code> | create_glossary block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProject">CreateProject</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>[]</code> | create_project block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProjectFromProjectProfile">CreateProjectFromProjectProfile</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>[]</code> | create_project_from_project_profile block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.delegateCreateEnvironmentProfile">DelegateCreateEnvironmentProfile</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>[]</code> | delegate_create_environment_profile block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideDomainUnitOwners">OverrideDomainUnitOwners</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>[]</code> | override_domain_unit_owners block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideProjectOwners">OverrideProjectOwners</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>[]</code> | override_project_owners block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.useAssetType">UseAssetType</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>[]</code> | use_asset_type block. |

---

##### `AddToProjectMemberPool`<sup>Optional</sup> <a name="AddToProjectMemberPool" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.addToProjectMemberPool"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailAddToProjectMemberPool[] AddToProjectMemberPool { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>[]

add_to_project_member_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#add_to_project_member_pool DatazonePolicyGrant#add_to_project_member_pool}

---

##### `CreateAssetType`<sup>Optional</sup> <a name="CreateAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createAssetType"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateAssetType[] CreateAssetType { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>[]

create_asset_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_asset_type DatazonePolicyGrant#create_asset_type}

---

##### `CreateDomainUnit`<sup>Optional</sup> <a name="CreateDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createDomainUnit"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateDomainUnit[] CreateDomainUnit { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>[]

create_domain_unit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_domain_unit DatazonePolicyGrant#create_domain_unit}

---

##### `CreateEnvironment`<sup>Optional</sup> <a name="CreateEnvironment" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironment"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateEnvironment[] CreateEnvironment { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>[]

create_environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_environment DatazonePolicyGrant#create_environment}

---

##### `CreateEnvironmentFromBlueprint`<sup>Optional</sup> <a name="CreateEnvironmentFromBlueprint" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentFromBlueprint"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint[] CreateEnvironmentFromBlueprint { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>[]

create_environment_from_blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_environment_from_blueprint DatazonePolicyGrant#create_environment_from_blueprint}

---

##### `CreateEnvironmentProfile`<sup>Optional</sup> <a name="CreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentProfile"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateEnvironmentProfile[] CreateEnvironmentProfile { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>[]

create_environment_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_environment_profile DatazonePolicyGrant#create_environment_profile}

---

##### `CreateFormType`<sup>Optional</sup> <a name="CreateFormType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createFormType"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateFormType[] CreateFormType { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>[]

create_form_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_form_type DatazonePolicyGrant#create_form_type}

---

##### `CreateGlossary`<sup>Optional</sup> <a name="CreateGlossary" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createGlossary"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateGlossary[] CreateGlossary { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>[]

create_glossary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_glossary DatazonePolicyGrant#create_glossary}

---

##### `CreateProject`<sup>Optional</sup> <a name="CreateProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProject"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateProject[] CreateProject { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>[]

create_project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_project DatazonePolicyGrant#create_project}

---

##### `CreateProjectFromProjectProfile`<sup>Optional</sup> <a name="CreateProjectFromProjectProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProjectFromProjectProfile"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateProjectFromProjectProfile[] CreateProjectFromProjectProfile { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>[]

create_project_from_project_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_project_from_project_profile DatazonePolicyGrant#create_project_from_project_profile}

---

##### `DelegateCreateEnvironmentProfile`<sup>Optional</sup> <a name="DelegateCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.delegateCreateEnvironmentProfile"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile[] DelegateCreateEnvironmentProfile { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>[]

delegate_create_environment_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#delegate_create_environment_profile DatazonePolicyGrant#delegate_create_environment_profile}

---

##### `OverrideDomainUnitOwners`<sup>Optional</sup> <a name="OverrideDomainUnitOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideDomainUnitOwners"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailOverrideDomainUnitOwners[] OverrideDomainUnitOwners { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>[]

override_domain_unit_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#override_domain_unit_owners DatazonePolicyGrant#override_domain_unit_owners}

---

##### `OverrideProjectOwners`<sup>Optional</sup> <a name="OverrideProjectOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideProjectOwners"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailOverrideProjectOwners[] OverrideProjectOwners { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>[]

override_project_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#override_project_owners DatazonePolicyGrant#override_project_owners}

---

##### `UseAssetType`<sup>Optional</sup> <a name="UseAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.useAssetType"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailUseAssetType[] UseAssetType { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>[]

use_asset_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#use_asset_type DatazonePolicyGrant#use_asset_type}

---

### DatazonePolicyGrantDetailAddToProjectMemberPool <a name="DatazonePolicyGrantDetailAddToProjectMemberPool" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailAddToProjectMemberPool {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateAssetType <a name="DatazonePolicyGrantDetailCreateAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateAssetType {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateDomainUnit <a name="DatazonePolicyGrantDetailCreateDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateDomainUnit {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateEnvironment <a name="DatazonePolicyGrantDetailCreateEnvironment" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateEnvironment {

};
```


### DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint <a name="DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint {

};
```


### DatazonePolicyGrantDetailCreateEnvironmentProfile <a name="DatazonePolicyGrantDetailCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateEnvironmentProfile {
    string DomainUnitId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile.property.domainUnitId">DomainUnitId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}. |

---

##### `DomainUnitId`<sup>Optional</sup> <a name="DomainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile.property.domainUnitId"></a>

```csharp
public string DomainUnitId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}.

---

### DatazonePolicyGrantDetailCreateFormType <a name="DatazonePolicyGrantDetailCreateFormType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateFormType {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateGlossary <a name="DatazonePolicyGrantDetailCreateGlossary" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateGlossary {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateProject <a name="DatazonePolicyGrantDetailCreateProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateProject {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateProjectFromProjectProfile <a name="DatazonePolicyGrantDetailCreateProjectFromProjectProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateProjectFromProjectProfile {
    bool|IResolvable IncludeChildDomainUnits = null,
    string[] ProjectProfiles = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.projectProfiles">ProjectProfiles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_profiles DatazonePolicyGrant#project_profiles}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

##### `ProjectProfiles`<sup>Optional</sup> <a name="ProjectProfiles" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.projectProfiles"></a>

```csharp
public string[] ProjectProfiles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_profiles DatazonePolicyGrant#project_profiles}.

---

### DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile <a name="DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile {

};
```


### DatazonePolicyGrantDetailOverrideDomainUnitOwners <a name="DatazonePolicyGrantDetailOverrideDomainUnitOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailOverrideDomainUnitOwners {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailOverrideProjectOwners <a name="DatazonePolicyGrantDetailOverrideProjectOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailOverrideProjectOwners {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailUseAssetType <a name="DatazonePolicyGrantDetailUseAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailUseAssetType {
    string DomainUnitId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType.property.domainUnitId">DomainUnitId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}. |

---

##### `DomainUnitId`<sup>Optional</sup> <a name="DomainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType.property.domainUnitId"></a>

```csharp
public string DomainUnitId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}.

---

### DatazonePolicyGrantPrincipal <a name="DatazonePolicyGrantPrincipal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipal {
    IResolvable|DatazonePolicyGrantPrincipalDomainUnit[] DomainUnit = null,
    IResolvable|DatazonePolicyGrantPrincipalGroup[] Group = null,
    IResolvable|DatazonePolicyGrantPrincipalProject[] Project = null,
    IResolvable|DatazonePolicyGrantPrincipalUser[] User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.domainUnit">DomainUnit</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>[]</code> | domain_unit block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.group">Group</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>[]</code> | group block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.project">Project</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>[]</code> | project block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.user">User</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>[]</code> | user block. |

---

##### `DomainUnit`<sup>Optional</sup> <a name="DomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.domainUnit"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalDomainUnit[] DomainUnit { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>[]

domain_unit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.group"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalGroup[] Group { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>[]

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#group DatazonePolicyGrant#group}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.project"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalProject[] Project { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>[]

project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project DatazonePolicyGrant#project}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.user"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalUser[] User { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>[]

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#user DatazonePolicyGrant#user}

---

### DatazonePolicyGrantPrincipalDomainUnit <a name="DatazonePolicyGrantPrincipalDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalDomainUnit {
    string DomainUnitDesignation,
    IResolvable|DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter[] AllDomainUnitsGrantFilter = null,
    string DomainUnitIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitDesignation">DomainUnitDesignation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_designation DatazonePolicyGrant#domain_unit_designation}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.allDomainUnitsGrantFilter">AllDomainUnitsGrantFilter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>[]</code> | all_domain_units_grant_filter block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitIdentifier">DomainUnitIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_identifier DatazonePolicyGrant#domain_unit_identifier}. |

---

##### `DomainUnitDesignation`<sup>Required</sup> <a name="DomainUnitDesignation" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitDesignation"></a>

```csharp
public string DomainUnitDesignation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_designation DatazonePolicyGrant#domain_unit_designation}.

---

##### `AllDomainUnitsGrantFilter`<sup>Optional</sup> <a name="AllDomainUnitsGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.allDomainUnitsGrantFilter"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter[] AllDomainUnitsGrantFilter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>[]

all_domain_units_grant_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#all_domain_units_grant_filter DatazonePolicyGrant#all_domain_units_grant_filter}

---

##### `DomainUnitIdentifier`<sup>Optional</sup> <a name="DomainUnitIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitIdentifier"></a>

```csharp
public string DomainUnitIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_identifier DatazonePolicyGrant#domain_unit_identifier}.

---

### DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter <a name="DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter {

};
```


### DatazonePolicyGrantPrincipalGroup <a name="DatazonePolicyGrantPrincipalGroup" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalGroup {
    string GroupIdentifier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup.property.groupIdentifier">GroupIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#group_identifier DatazonePolicyGrant#group_identifier}. |

---

##### `GroupIdentifier`<sup>Required</sup> <a name="GroupIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup.property.groupIdentifier"></a>

```csharp
public string GroupIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#group_identifier DatazonePolicyGrant#group_identifier}.

---

### DatazonePolicyGrantPrincipalProject <a name="DatazonePolicyGrantPrincipalProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalProject {
    string ProjectDesignation,
    IResolvable|DatazonePolicyGrantPrincipalProjectDomainUnitFilter[] DomainUnitFilter = null,
    string ProjectIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectDesignation">ProjectDesignation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_designation DatazonePolicyGrant#project_designation}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.domainUnitFilter">DomainUnitFilter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>[]</code> | domain_unit_filter block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectIdentifier">ProjectIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_identifier DatazonePolicyGrant#project_identifier}. |

---

##### `ProjectDesignation`<sup>Required</sup> <a name="ProjectDesignation" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectDesignation"></a>

```csharp
public string ProjectDesignation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_designation DatazonePolicyGrant#project_designation}.

---

##### `DomainUnitFilter`<sup>Optional</sup> <a name="DomainUnitFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.domainUnitFilter"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalProjectDomainUnitFilter[] DomainUnitFilter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>[]

domain_unit_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_filter DatazonePolicyGrant#domain_unit_filter}

---

##### `ProjectIdentifier`<sup>Optional</sup> <a name="ProjectIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectIdentifier"></a>

```csharp
public string ProjectIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_identifier DatazonePolicyGrant#project_identifier}.

---

### DatazonePolicyGrantPrincipalProjectDomainUnitFilter <a name="DatazonePolicyGrantPrincipalProjectDomainUnitFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalProjectDomainUnitFilter {
    string DomainUnit,
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter.property.domainUnit">DomainUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `DomainUnit`<sup>Required</sup> <a name="DomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter.property.domainUnit"></a>

```csharp
public string DomainUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}.

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantPrincipalUser <a name="DatazonePolicyGrantPrincipalUser" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalUser {
    IResolvable|DatazonePolicyGrantPrincipalUserAllUsersGrantFilter[] AllUsersGrantFilter = null,
    string UserIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.allUsersGrantFilter">AllUsersGrantFilter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>[]</code> | all_users_grant_filter block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.userIdentifier">UserIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#user_identifier DatazonePolicyGrant#user_identifier}. |

---

##### `AllUsersGrantFilter`<sup>Optional</sup> <a name="AllUsersGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.allUsersGrantFilter"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalUserAllUsersGrantFilter[] AllUsersGrantFilter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>[]

all_users_grant_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#all_users_grant_filter DatazonePolicyGrant#all_users_grant_filter}

---

##### `UserIdentifier`<sup>Optional</sup> <a name="UserIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.userIdentifier"></a>

```csharp
public string UserIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#user_identifier DatazonePolicyGrant#user_identifier}.

---

### DatazonePolicyGrantPrincipalUserAllUsersGrantFilter <a name="DatazonePolicyGrantPrincipalUserAllUsersGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalUserAllUsersGrantFilter {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DatazonePolicyGrantDetailAddToProjectMemberPoolList <a name="DatazonePolicyGrantDetailAddToProjectMemberPoolList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailAddToProjectMemberPoolList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.get"></a>

```csharp
private DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailAddToProjectMemberPool[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>[]

---


### DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference <a name="DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailAddToProjectMemberPool InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>

---


### DatazonePolicyGrantDetailCreateAssetTypeList <a name="DatazonePolicyGrantDetailCreateAssetTypeList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateAssetTypeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.get"></a>

```csharp
private DatazonePolicyGrantDetailCreateAssetTypeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateAssetType[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>[]

---


### DatazonePolicyGrantDetailCreateAssetTypeOutputReference <a name="DatazonePolicyGrantDetailCreateAssetTypeOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateAssetTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateAssetType InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>

---


### DatazonePolicyGrantDetailCreateDomainUnitList <a name="DatazonePolicyGrantDetailCreateDomainUnitList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateDomainUnitList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.get"></a>

```csharp
private DatazonePolicyGrantDetailCreateDomainUnitOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateDomainUnit[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>[]

---


### DatazonePolicyGrantDetailCreateDomainUnitOutputReference <a name="DatazonePolicyGrantDetailCreateDomainUnitOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateDomainUnitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateDomainUnit InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>

---


### DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList <a name="DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.get"></a>

```csharp
private DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>[]

---


### DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference <a name="DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>

---


### DatazonePolicyGrantDetailCreateEnvironmentList <a name="DatazonePolicyGrantDetailCreateEnvironmentList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateEnvironmentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.get"></a>

```csharp
private DatazonePolicyGrantDetailCreateEnvironmentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateEnvironment[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>[]

---


### DatazonePolicyGrantDetailCreateEnvironmentOutputReference <a name="DatazonePolicyGrantDetailCreateEnvironmentOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateEnvironment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>

---


### DatazonePolicyGrantDetailCreateEnvironmentProfileList <a name="DatazonePolicyGrantDetailCreateEnvironmentProfileList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateEnvironmentProfileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.get"></a>

```csharp
private DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateEnvironmentProfile[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>[]

---


### DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference <a name="DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resetDomainUnitId">ResetDomainUnitId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainUnitId` <a name="ResetDomainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resetDomainUnitId"></a>

```csharp
private void ResetDomainUnitId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitIdInput">DomainUnitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitId">DomainUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainUnitIdInput`<sup>Optional</sup> <a name="DomainUnitIdInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitIdInput"></a>

```csharp
public string DomainUnitIdInput { get; }
```

- *Type:* string

---

##### `DomainUnitId`<sup>Required</sup> <a name="DomainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitId"></a>

```csharp
public string DomainUnitId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateEnvironmentProfile InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>

---


### DatazonePolicyGrantDetailCreateFormTypeList <a name="DatazonePolicyGrantDetailCreateFormTypeList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateFormTypeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.get"></a>

```csharp
private DatazonePolicyGrantDetailCreateFormTypeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateFormType[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>[]

---


### DatazonePolicyGrantDetailCreateFormTypeOutputReference <a name="DatazonePolicyGrantDetailCreateFormTypeOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateFormTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateFormType InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>

---


### DatazonePolicyGrantDetailCreateGlossaryList <a name="DatazonePolicyGrantDetailCreateGlossaryList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateGlossaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.get"></a>

```csharp
private DatazonePolicyGrantDetailCreateGlossaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateGlossary[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>[]

---


### DatazonePolicyGrantDetailCreateGlossaryOutputReference <a name="DatazonePolicyGrantDetailCreateGlossaryOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateGlossaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateGlossary InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>

---


### DatazonePolicyGrantDetailCreateProjectFromProjectProfileList <a name="DatazonePolicyGrantDetailCreateProjectFromProjectProfileList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateProjectFromProjectProfileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.get"></a>

```csharp
private DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateProjectFromProjectProfile[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>[]

---


### DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference <a name="DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetProjectProfiles">ResetProjectProfiles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```

##### `ResetProjectProfiles` <a name="ResetProjectProfiles" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetProjectProfiles"></a>

```csharp
private void ResetProjectProfiles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfilesInput">ProjectProfilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfiles">ProjectProfiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectProfilesInput`<sup>Optional</sup> <a name="ProjectProfilesInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfilesInput"></a>

```csharp
public string[] ProjectProfilesInput { get; }
```

- *Type:* string[]

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectProfiles`<sup>Required</sup> <a name="ProjectProfiles" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfiles"></a>

```csharp
public string[] ProjectProfiles { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateProjectFromProjectProfile InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>

---


### DatazonePolicyGrantDetailCreateProjectList <a name="DatazonePolicyGrantDetailCreateProjectList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateProjectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.get"></a>

```csharp
private DatazonePolicyGrantDetailCreateProjectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateProject[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>[]

---


### DatazonePolicyGrantDetailCreateProjectOutputReference <a name="DatazonePolicyGrantDetailCreateProjectOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailCreateProjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateProject InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>

---


### DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList <a name="DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.get"></a>

```csharp
private DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>[]

---


### DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference <a name="DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>

---


### DatazonePolicyGrantDetailList <a name="DatazonePolicyGrantDetailList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.get"></a>

```csharp
private DatazonePolicyGrantDetailOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetail[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>[]

---


### DatazonePolicyGrantDetailOutputReference <a name="DatazonePolicyGrantDetailOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putAddToProjectMemberPool">PutAddToProjectMemberPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateAssetType">PutCreateAssetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateDomainUnit">PutCreateDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironment">PutCreateEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentFromBlueprint">PutCreateEnvironmentFromBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentProfile">PutCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateFormType">PutCreateFormType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateGlossary">PutCreateGlossary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProject">PutCreateProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProjectFromProjectProfile">PutCreateProjectFromProjectProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putDelegateCreateEnvironmentProfile">PutDelegateCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideDomainUnitOwners">PutOverrideDomainUnitOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideProjectOwners">PutOverrideProjectOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putUseAssetType">PutUseAssetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetAddToProjectMemberPool">ResetAddToProjectMemberPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateAssetType">ResetCreateAssetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateDomainUnit">ResetCreateDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironment">ResetCreateEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentFromBlueprint">ResetCreateEnvironmentFromBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentProfile">ResetCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateFormType">ResetCreateFormType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateGlossary">ResetCreateGlossary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProject">ResetCreateProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProjectFromProjectProfile">ResetCreateProjectFromProjectProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetDelegateCreateEnvironmentProfile">ResetDelegateCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideDomainUnitOwners">ResetOverrideDomainUnitOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideProjectOwners">ResetOverrideProjectOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetUseAssetType">ResetUseAssetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddToProjectMemberPool` <a name="PutAddToProjectMemberPool" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putAddToProjectMemberPool"></a>

```csharp
private void PutAddToProjectMemberPool(IResolvable|DatazonePolicyGrantDetailAddToProjectMemberPool[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putAddToProjectMemberPool.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>[]

---

##### `PutCreateAssetType` <a name="PutCreateAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateAssetType"></a>

```csharp
private void PutCreateAssetType(IResolvable|DatazonePolicyGrantDetailCreateAssetType[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateAssetType.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>[]

---

##### `PutCreateDomainUnit` <a name="PutCreateDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateDomainUnit"></a>

```csharp
private void PutCreateDomainUnit(IResolvable|DatazonePolicyGrantDetailCreateDomainUnit[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateDomainUnit.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>[]

---

##### `PutCreateEnvironment` <a name="PutCreateEnvironment" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironment"></a>

```csharp
private void PutCreateEnvironment(IResolvable|DatazonePolicyGrantDetailCreateEnvironment[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironment.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>[]

---

##### `PutCreateEnvironmentFromBlueprint` <a name="PutCreateEnvironmentFromBlueprint" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentFromBlueprint"></a>

```csharp
private void PutCreateEnvironmentFromBlueprint(IResolvable|DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentFromBlueprint.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>[]

---

##### `PutCreateEnvironmentProfile` <a name="PutCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentProfile"></a>

```csharp
private void PutCreateEnvironmentProfile(IResolvable|DatazonePolicyGrantDetailCreateEnvironmentProfile[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentProfile.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>[]

---

##### `PutCreateFormType` <a name="PutCreateFormType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateFormType"></a>

```csharp
private void PutCreateFormType(IResolvable|DatazonePolicyGrantDetailCreateFormType[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateFormType.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>[]

---

##### `PutCreateGlossary` <a name="PutCreateGlossary" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateGlossary"></a>

```csharp
private void PutCreateGlossary(IResolvable|DatazonePolicyGrantDetailCreateGlossary[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateGlossary.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>[]

---

##### `PutCreateProject` <a name="PutCreateProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProject"></a>

```csharp
private void PutCreateProject(IResolvable|DatazonePolicyGrantDetailCreateProject[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProject.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>[]

---

##### `PutCreateProjectFromProjectProfile` <a name="PutCreateProjectFromProjectProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProjectFromProjectProfile"></a>

```csharp
private void PutCreateProjectFromProjectProfile(IResolvable|DatazonePolicyGrantDetailCreateProjectFromProjectProfile[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProjectFromProjectProfile.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>[]

---

##### `PutDelegateCreateEnvironmentProfile` <a name="PutDelegateCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putDelegateCreateEnvironmentProfile"></a>

```csharp
private void PutDelegateCreateEnvironmentProfile(IResolvable|DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putDelegateCreateEnvironmentProfile.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>[]

---

##### `PutOverrideDomainUnitOwners` <a name="PutOverrideDomainUnitOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideDomainUnitOwners"></a>

```csharp
private void PutOverrideDomainUnitOwners(IResolvable|DatazonePolicyGrantDetailOverrideDomainUnitOwners[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideDomainUnitOwners.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>[]

---

##### `PutOverrideProjectOwners` <a name="PutOverrideProjectOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideProjectOwners"></a>

```csharp
private void PutOverrideProjectOwners(IResolvable|DatazonePolicyGrantDetailOverrideProjectOwners[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideProjectOwners.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>[]

---

##### `PutUseAssetType` <a name="PutUseAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putUseAssetType"></a>

```csharp
private void PutUseAssetType(IResolvable|DatazonePolicyGrantDetailUseAssetType[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putUseAssetType.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>[]

---

##### `ResetAddToProjectMemberPool` <a name="ResetAddToProjectMemberPool" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetAddToProjectMemberPool"></a>

```csharp
private void ResetAddToProjectMemberPool()
```

##### `ResetCreateAssetType` <a name="ResetCreateAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateAssetType"></a>

```csharp
private void ResetCreateAssetType()
```

##### `ResetCreateDomainUnit` <a name="ResetCreateDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateDomainUnit"></a>

```csharp
private void ResetCreateDomainUnit()
```

##### `ResetCreateEnvironment` <a name="ResetCreateEnvironment" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironment"></a>

```csharp
private void ResetCreateEnvironment()
```

##### `ResetCreateEnvironmentFromBlueprint` <a name="ResetCreateEnvironmentFromBlueprint" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentFromBlueprint"></a>

```csharp
private void ResetCreateEnvironmentFromBlueprint()
```

##### `ResetCreateEnvironmentProfile` <a name="ResetCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentProfile"></a>

```csharp
private void ResetCreateEnvironmentProfile()
```

##### `ResetCreateFormType` <a name="ResetCreateFormType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateFormType"></a>

```csharp
private void ResetCreateFormType()
```

##### `ResetCreateGlossary` <a name="ResetCreateGlossary" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateGlossary"></a>

```csharp
private void ResetCreateGlossary()
```

##### `ResetCreateProject` <a name="ResetCreateProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProject"></a>

```csharp
private void ResetCreateProject()
```

##### `ResetCreateProjectFromProjectProfile` <a name="ResetCreateProjectFromProjectProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProjectFromProjectProfile"></a>

```csharp
private void ResetCreateProjectFromProjectProfile()
```

##### `ResetDelegateCreateEnvironmentProfile` <a name="ResetDelegateCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetDelegateCreateEnvironmentProfile"></a>

```csharp
private void ResetDelegateCreateEnvironmentProfile()
```

##### `ResetOverrideDomainUnitOwners` <a name="ResetOverrideDomainUnitOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideDomainUnitOwners"></a>

```csharp
private void ResetOverrideDomainUnitOwners()
```

##### `ResetOverrideProjectOwners` <a name="ResetOverrideProjectOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideProjectOwners"></a>

```csharp
private void ResetOverrideProjectOwners()
```

##### `ResetUseAssetType` <a name="ResetUseAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetUseAssetType"></a>

```csharp
private void ResetUseAssetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPool">AddToProjectMemberPool</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList">DatazonePolicyGrantDetailAddToProjectMemberPoolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetType">CreateAssetType</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList">DatazonePolicyGrantDetailCreateAssetTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnit">CreateDomainUnit</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList">DatazonePolicyGrantDetailCreateDomainUnitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironment">CreateEnvironment</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList">DatazonePolicyGrantDetailCreateEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprint">CreateEnvironmentFromBlueprint</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfile">CreateEnvironmentProfile</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList">DatazonePolicyGrantDetailCreateEnvironmentProfileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormType">CreateFormType</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList">DatazonePolicyGrantDetailCreateFormTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossary">CreateGlossary</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList">DatazonePolicyGrantDetailCreateGlossaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProject">CreateProject</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList">DatazonePolicyGrantDetailCreateProjectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfile">CreateProjectFromProjectProfile</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList">DatazonePolicyGrantDetailCreateProjectFromProjectProfileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfile">DelegateCreateEnvironmentProfile</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwners">OverrideDomainUnitOwners</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList">DatazonePolicyGrantDetailOverrideDomainUnitOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwners">OverrideProjectOwners</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList">DatazonePolicyGrantDetailOverrideProjectOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.useAssetType">UseAssetType</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList">DatazonePolicyGrantDetailUseAssetTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPoolInput">AddToProjectMemberPoolInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetTypeInput">CreateAssetTypeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnitInput">CreateDomainUnitInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprintInput">CreateEnvironmentFromBlueprintInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentInput">CreateEnvironmentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfileInput">CreateEnvironmentProfileInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormTypeInput">CreateFormTypeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossaryInput">CreateGlossaryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfileInput">CreateProjectFromProjectProfileInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectInput">CreateProjectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfileInput">DelegateCreateEnvironmentProfileInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwnersInput">OverrideDomainUnitOwnersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwnersInput">OverrideProjectOwnersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.useAssetTypeInput">UseAssetTypeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddToProjectMemberPool`<sup>Required</sup> <a name="AddToProjectMemberPool" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPool"></a>

```csharp
public DatazonePolicyGrantDetailAddToProjectMemberPoolList AddToProjectMemberPool { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList">DatazonePolicyGrantDetailAddToProjectMemberPoolList</a>

---

##### `CreateAssetType`<sup>Required</sup> <a name="CreateAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetType"></a>

```csharp
public DatazonePolicyGrantDetailCreateAssetTypeList CreateAssetType { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList">DatazonePolicyGrantDetailCreateAssetTypeList</a>

---

##### `CreateDomainUnit`<sup>Required</sup> <a name="CreateDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnit"></a>

```csharp
public DatazonePolicyGrantDetailCreateDomainUnitList CreateDomainUnit { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList">DatazonePolicyGrantDetailCreateDomainUnitList</a>

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironment"></a>

```csharp
public DatazonePolicyGrantDetailCreateEnvironmentList CreateEnvironment { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList">DatazonePolicyGrantDetailCreateEnvironmentList</a>

---

##### `CreateEnvironmentFromBlueprint`<sup>Required</sup> <a name="CreateEnvironmentFromBlueprint" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprint"></a>

```csharp
public DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList CreateEnvironmentFromBlueprint { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList</a>

---

##### `CreateEnvironmentProfile`<sup>Required</sup> <a name="CreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfile"></a>

```csharp
public DatazonePolicyGrantDetailCreateEnvironmentProfileList CreateEnvironmentProfile { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList">DatazonePolicyGrantDetailCreateEnvironmentProfileList</a>

---

##### `CreateFormType`<sup>Required</sup> <a name="CreateFormType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormType"></a>

```csharp
public DatazonePolicyGrantDetailCreateFormTypeList CreateFormType { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList">DatazonePolicyGrantDetailCreateFormTypeList</a>

---

##### `CreateGlossary`<sup>Required</sup> <a name="CreateGlossary" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossary"></a>

```csharp
public DatazonePolicyGrantDetailCreateGlossaryList CreateGlossary { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList">DatazonePolicyGrantDetailCreateGlossaryList</a>

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProject"></a>

```csharp
public DatazonePolicyGrantDetailCreateProjectList CreateProject { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList">DatazonePolicyGrantDetailCreateProjectList</a>

---

##### `CreateProjectFromProjectProfile`<sup>Required</sup> <a name="CreateProjectFromProjectProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfile"></a>

```csharp
public DatazonePolicyGrantDetailCreateProjectFromProjectProfileList CreateProjectFromProjectProfile { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList">DatazonePolicyGrantDetailCreateProjectFromProjectProfileList</a>

---

##### `DelegateCreateEnvironmentProfile`<sup>Required</sup> <a name="DelegateCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfile"></a>

```csharp
public DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList DelegateCreateEnvironmentProfile { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList</a>

---

##### `OverrideDomainUnitOwners`<sup>Required</sup> <a name="OverrideDomainUnitOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwners"></a>

```csharp
public DatazonePolicyGrantDetailOverrideDomainUnitOwnersList OverrideDomainUnitOwners { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList">DatazonePolicyGrantDetailOverrideDomainUnitOwnersList</a>

---

##### `OverrideProjectOwners`<sup>Required</sup> <a name="OverrideProjectOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwners"></a>

```csharp
public DatazonePolicyGrantDetailOverrideProjectOwnersList OverrideProjectOwners { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList">DatazonePolicyGrantDetailOverrideProjectOwnersList</a>

---

##### `UseAssetType`<sup>Required</sup> <a name="UseAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.useAssetType"></a>

```csharp
public DatazonePolicyGrantDetailUseAssetTypeList UseAssetType { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList">DatazonePolicyGrantDetailUseAssetTypeList</a>

---

##### `AddToProjectMemberPoolInput`<sup>Optional</sup> <a name="AddToProjectMemberPoolInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPoolInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailAddToProjectMemberPool[] AddToProjectMemberPoolInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>[]

---

##### `CreateAssetTypeInput`<sup>Optional</sup> <a name="CreateAssetTypeInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetTypeInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateAssetType[] CreateAssetTypeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>[]

---

##### `CreateDomainUnitInput`<sup>Optional</sup> <a name="CreateDomainUnitInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnitInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateDomainUnit[] CreateDomainUnitInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>[]

---

##### `CreateEnvironmentFromBlueprintInput`<sup>Optional</sup> <a name="CreateEnvironmentFromBlueprintInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprintInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint[] CreateEnvironmentFromBlueprintInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>[]

---

##### `CreateEnvironmentInput`<sup>Optional</sup> <a name="CreateEnvironmentInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateEnvironment[] CreateEnvironmentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>[]

---

##### `CreateEnvironmentProfileInput`<sup>Optional</sup> <a name="CreateEnvironmentProfileInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfileInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateEnvironmentProfile[] CreateEnvironmentProfileInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>[]

---

##### `CreateFormTypeInput`<sup>Optional</sup> <a name="CreateFormTypeInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormTypeInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateFormType[] CreateFormTypeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>[]

---

##### `CreateGlossaryInput`<sup>Optional</sup> <a name="CreateGlossaryInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossaryInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateGlossary[] CreateGlossaryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>[]

---

##### `CreateProjectFromProjectProfileInput`<sup>Optional</sup> <a name="CreateProjectFromProjectProfileInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfileInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateProjectFromProjectProfile[] CreateProjectFromProjectProfileInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>[]

---

##### `CreateProjectInput`<sup>Optional</sup> <a name="CreateProjectInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateProject[] CreateProjectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>[]

---

##### `DelegateCreateEnvironmentProfileInput`<sup>Optional</sup> <a name="DelegateCreateEnvironmentProfileInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfileInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile[] DelegateCreateEnvironmentProfileInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>[]

---

##### `OverrideDomainUnitOwnersInput`<sup>Optional</sup> <a name="OverrideDomainUnitOwnersInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwnersInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailOverrideDomainUnitOwners[] OverrideDomainUnitOwnersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>[]

---

##### `OverrideProjectOwnersInput`<sup>Optional</sup> <a name="OverrideProjectOwnersInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwnersInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailOverrideProjectOwners[] OverrideProjectOwnersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>[]

---

##### `UseAssetTypeInput`<sup>Optional</sup> <a name="UseAssetTypeInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.useAssetTypeInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailUseAssetType[] UseAssetTypeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetail InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>

---


### DatazonePolicyGrantDetailOverrideDomainUnitOwnersList <a name="DatazonePolicyGrantDetailOverrideDomainUnitOwnersList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailOverrideDomainUnitOwnersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.get"></a>

```csharp
private DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailOverrideDomainUnitOwners[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>[]

---


### DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference <a name="DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailOverrideDomainUnitOwners InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>

---


### DatazonePolicyGrantDetailOverrideProjectOwnersList <a name="DatazonePolicyGrantDetailOverrideProjectOwnersList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailOverrideProjectOwnersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.get"></a>

```csharp
private DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailOverrideProjectOwners[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>[]

---


### DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference <a name="DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailOverrideProjectOwners InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>

---


### DatazonePolicyGrantDetailUseAssetTypeList <a name="DatazonePolicyGrantDetailUseAssetTypeList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailUseAssetTypeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.get"></a>

```csharp
private DatazonePolicyGrantDetailUseAssetTypeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailUseAssetType[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>[]

---


### DatazonePolicyGrantDetailUseAssetTypeOutputReference <a name="DatazonePolicyGrantDetailUseAssetTypeOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantDetailUseAssetTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.resetDomainUnitId">ResetDomainUnitId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainUnitId` <a name="ResetDomainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.resetDomainUnitId"></a>

```csharp
private void ResetDomainUnitId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.domainUnitIdInput">DomainUnitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.domainUnitId">DomainUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainUnitIdInput`<sup>Optional</sup> <a name="DomainUnitIdInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.domainUnitIdInput"></a>

```csharp
public string DomainUnitIdInput { get; }
```

- *Type:* string

---

##### `DomainUnitId`<sup>Required</sup> <a name="DomainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.domainUnitId"></a>

```csharp
public string DomainUnitId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailUseAssetType InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>

---


### DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList <a name="DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.get"></a>

```csharp
private DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>[]

---


### DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference <a name="DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>

---


### DatazonePolicyGrantPrincipalDomainUnitList <a name="DatazonePolicyGrantPrincipalDomainUnitList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalDomainUnitList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.get"></a>

```csharp
private DatazonePolicyGrantPrincipalDomainUnitOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalDomainUnit[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>[]

---


### DatazonePolicyGrantPrincipalDomainUnitOutputReference <a name="DatazonePolicyGrantPrincipalDomainUnitOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalDomainUnitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.putAllDomainUnitsGrantFilter">PutAllDomainUnitsGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetAllDomainUnitsGrantFilter">ResetAllDomainUnitsGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitIdentifier">ResetDomainUnitIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllDomainUnitsGrantFilter` <a name="PutAllDomainUnitsGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.putAllDomainUnitsGrantFilter"></a>

```csharp
private void PutAllDomainUnitsGrantFilter(IResolvable|DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.putAllDomainUnitsGrantFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>[]

---

##### `ResetAllDomainUnitsGrantFilter` <a name="ResetAllDomainUnitsGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetAllDomainUnitsGrantFilter"></a>

```csharp
private void ResetAllDomainUnitsGrantFilter()
```

##### `ResetDomainUnitIdentifier` <a name="ResetDomainUnitIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitIdentifier"></a>

```csharp
private void ResetDomainUnitIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.allDomainUnitsGrantFilter">AllDomainUnitsGrantFilter</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.allDomainUnitsGrantFilterInput">AllDomainUnitsGrantFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignationInput">DomainUnitDesignationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifierInput">DomainUnitIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignation">DomainUnitDesignation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifier">DomainUnitIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllDomainUnitsGrantFilter`<sup>Required</sup> <a name="AllDomainUnitsGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.allDomainUnitsGrantFilter"></a>

```csharp
public DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList AllDomainUnitsGrantFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList</a>

---

##### `AllDomainUnitsGrantFilterInput`<sup>Optional</sup> <a name="AllDomainUnitsGrantFilterInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.allDomainUnitsGrantFilterInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter[] AllDomainUnitsGrantFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>[]

---

##### `DomainUnitDesignationInput`<sup>Optional</sup> <a name="DomainUnitDesignationInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignationInput"></a>

```csharp
public string DomainUnitDesignationInput { get; }
```

- *Type:* string

---

##### `DomainUnitIdentifierInput`<sup>Optional</sup> <a name="DomainUnitIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifierInput"></a>

```csharp
public string DomainUnitIdentifierInput { get; }
```

- *Type:* string

---

##### `DomainUnitDesignation`<sup>Required</sup> <a name="DomainUnitDesignation" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignation"></a>

```csharp
public string DomainUnitDesignation { get; }
```

- *Type:* string

---

##### `DomainUnitIdentifier`<sup>Required</sup> <a name="DomainUnitIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifier"></a>

```csharp
public string DomainUnitIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalDomainUnit InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>

---


### DatazonePolicyGrantPrincipalGroupList <a name="DatazonePolicyGrantPrincipalGroupList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.get"></a>

```csharp
private DatazonePolicyGrantPrincipalGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalGroup[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>[]

---


### DatazonePolicyGrantPrincipalGroupOutputReference <a name="DatazonePolicyGrantPrincipalGroupOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifierInput">GroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifier">GroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupIdentifierInput`<sup>Optional</sup> <a name="GroupIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifierInput"></a>

```csharp
public string GroupIdentifierInput { get; }
```

- *Type:* string

---

##### `GroupIdentifier`<sup>Required</sup> <a name="GroupIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifier"></a>

```csharp
public string GroupIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalGroup InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>

---


### DatazonePolicyGrantPrincipalList <a name="DatazonePolicyGrantPrincipalList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.get"></a>

```csharp
private DatazonePolicyGrantPrincipalOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipal[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>[]

---


### DatazonePolicyGrantPrincipalOutputReference <a name="DatazonePolicyGrantPrincipalOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putDomainUnit">PutDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putGroup">PutGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putProject">PutProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putUser">PutUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetDomainUnit">ResetDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDomainUnit` <a name="PutDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putDomainUnit"></a>

```csharp
private void PutDomainUnit(IResolvable|DatazonePolicyGrantPrincipalDomainUnit[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putDomainUnit.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>[]

---

##### `PutGroup` <a name="PutGroup" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putGroup"></a>

```csharp
private void PutGroup(IResolvable|DatazonePolicyGrantPrincipalGroup[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putGroup.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>[]

---

##### `PutProject` <a name="PutProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putProject"></a>

```csharp
private void PutProject(IResolvable|DatazonePolicyGrantPrincipalProject[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putProject.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>[]

---

##### `PutUser` <a name="PutUser" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putUser"></a>

```csharp
private void PutUser(IResolvable|DatazonePolicyGrantPrincipalUser[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putUser.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>[]

---

##### `ResetDomainUnit` <a name="ResetDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetDomainUnit"></a>

```csharp
private void ResetDomainUnit()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetUser` <a name="ResetUser" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetUser"></a>

```csharp
private void ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnit">DomainUnit</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList">DatazonePolicyGrantPrincipalDomainUnitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.group">Group</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList">DatazonePolicyGrantPrincipalGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.project">Project</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList">DatazonePolicyGrantPrincipalProjectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.user">User</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList">DatazonePolicyGrantPrincipalUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnitInput">DomainUnitInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.groupInput">GroupInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.projectInput">ProjectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.userInput">UserInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainUnit`<sup>Required</sup> <a name="DomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnit"></a>

```csharp
public DatazonePolicyGrantPrincipalDomainUnitList DomainUnit { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList">DatazonePolicyGrantPrincipalDomainUnitList</a>

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.group"></a>

```csharp
public DatazonePolicyGrantPrincipalGroupList Group { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList">DatazonePolicyGrantPrincipalGroupList</a>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.project"></a>

```csharp
public DatazonePolicyGrantPrincipalProjectList Project { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList">DatazonePolicyGrantPrincipalProjectList</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.user"></a>

```csharp
public DatazonePolicyGrantPrincipalUserList User { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList">DatazonePolicyGrantPrincipalUserList</a>

---

##### `DomainUnitInput`<sup>Optional</sup> <a name="DomainUnitInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnitInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalDomainUnit[] DomainUnitInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>[]

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.groupInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalGroup[] GroupInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.projectInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalProject[] ProjectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>[]

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.userInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalUser[] UserInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipal InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>

---


### DatazonePolicyGrantPrincipalProjectDomainUnitFilterList <a name="DatazonePolicyGrantPrincipalProjectDomainUnitFilterList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalProjectDomainUnitFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.get"></a>

```csharp
private DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalProjectDomainUnitFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>[]

---


### DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference <a name="DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.domainUnitInput">DomainUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.domainUnit">DomainUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainUnitInput`<sup>Optional</sup> <a name="DomainUnitInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.domainUnitInput"></a>

```csharp
public string DomainUnitInput { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DomainUnit`<sup>Required</sup> <a name="DomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.domainUnit"></a>

```csharp
public string DomainUnit { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalProjectDomainUnitFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>

---


### DatazonePolicyGrantPrincipalProjectList <a name="DatazonePolicyGrantPrincipalProjectList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalProjectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.get"></a>

```csharp
private DatazonePolicyGrantPrincipalProjectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalProject[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>[]

---


### DatazonePolicyGrantPrincipalProjectOutputReference <a name="DatazonePolicyGrantPrincipalProjectOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalProjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.putDomainUnitFilter">PutDomainUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetDomainUnitFilter">ResetDomainUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectIdentifier">ResetProjectIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDomainUnitFilter` <a name="PutDomainUnitFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.putDomainUnitFilter"></a>

```csharp
private void PutDomainUnitFilter(IResolvable|DatazonePolicyGrantPrincipalProjectDomainUnitFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.putDomainUnitFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>[]

---

##### `ResetDomainUnitFilter` <a name="ResetDomainUnitFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetDomainUnitFilter"></a>

```csharp
private void ResetDomainUnitFilter()
```

##### `ResetProjectIdentifier` <a name="ResetProjectIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectIdentifier"></a>

```csharp
private void ResetProjectIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.domainUnitFilter">DomainUnitFilter</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList">DatazonePolicyGrantPrincipalProjectDomainUnitFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.domainUnitFilterInput">DomainUnitFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignationInput">ProjectDesignationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifierInput">ProjectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignation">ProjectDesignation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifier">ProjectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainUnitFilter`<sup>Required</sup> <a name="DomainUnitFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.domainUnitFilter"></a>

```csharp
public DatazonePolicyGrantPrincipalProjectDomainUnitFilterList DomainUnitFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList">DatazonePolicyGrantPrincipalProjectDomainUnitFilterList</a>

---

##### `DomainUnitFilterInput`<sup>Optional</sup> <a name="DomainUnitFilterInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.domainUnitFilterInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalProjectDomainUnitFilter[] DomainUnitFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>[]

---

##### `ProjectDesignationInput`<sup>Optional</sup> <a name="ProjectDesignationInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignationInput"></a>

```csharp
public string ProjectDesignationInput { get; }
```

- *Type:* string

---

##### `ProjectIdentifierInput`<sup>Optional</sup> <a name="ProjectIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifierInput"></a>

```csharp
public string ProjectIdentifierInput { get; }
```

- *Type:* string

---

##### `ProjectDesignation`<sup>Required</sup> <a name="ProjectDesignation" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignation"></a>

```csharp
public string ProjectDesignation { get; }
```

- *Type:* string

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifier"></a>

```csharp
public string ProjectIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalProject InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>

---


### DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList <a name="DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.get"></a>

```csharp
private DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalUserAllUsersGrantFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>[]

---


### DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference <a name="DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalUserAllUsersGrantFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>

---


### DatazonePolicyGrantPrincipalUserList <a name="DatazonePolicyGrantPrincipalUserList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalUserList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.get"></a>

```csharp
private DatazonePolicyGrantPrincipalUserOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalUser[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>[]

---


### DatazonePolicyGrantPrincipalUserOutputReference <a name="DatazonePolicyGrantPrincipalUserOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazonePolicyGrantPrincipalUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.putAllUsersGrantFilter">PutAllUsersGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetAllUsersGrantFilter">ResetAllUsersGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetUserIdentifier">ResetUserIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllUsersGrantFilter` <a name="PutAllUsersGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.putAllUsersGrantFilter"></a>

```csharp
private void PutAllUsersGrantFilter(IResolvable|DatazonePolicyGrantPrincipalUserAllUsersGrantFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.putAllUsersGrantFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>[]

---

##### `ResetAllUsersGrantFilter` <a name="ResetAllUsersGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetAllUsersGrantFilter"></a>

```csharp
private void ResetAllUsersGrantFilter()
```

##### `ResetUserIdentifier` <a name="ResetUserIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetUserIdentifier"></a>

```csharp
private void ResetUserIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilter">AllUsersGrantFilter</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList">DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilterInput">AllUsersGrantFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifierInput">UserIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifier">UserIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllUsersGrantFilter`<sup>Required</sup> <a name="AllUsersGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilter"></a>

```csharp
public DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList AllUsersGrantFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList">DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList</a>

---

##### `AllUsersGrantFilterInput`<sup>Optional</sup> <a name="AllUsersGrantFilterInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilterInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalUserAllUsersGrantFilter[] AllUsersGrantFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>[]

---

##### `UserIdentifierInput`<sup>Optional</sup> <a name="UserIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifierInput"></a>

```csharp
public string UserIdentifierInput { get; }
```

- *Type:* string

---

##### `UserIdentifier`<sup>Required</sup> <a name="UserIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifier"></a>

```csharp
public string UserIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalUser InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>

---



