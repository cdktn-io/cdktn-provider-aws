# `lambdaLayerVersionPermission` Submodule <a name="`lambdaLayerVersionPermission` Submodule" id="@cdktn/provider-aws.lambdaLayerVersionPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaLayerVersionPermission <a name="LambdaLayerVersionPermission" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission aws_lambda_layer_version_permission}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaLayerVersionPermission(Construct Scope, string Id, LambdaLayerVersionPermissionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig">LambdaLayerVersionPermissionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig">LambdaLayerVersionPermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetOrganizationId">ResetOrganizationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetSkipDestroy">ResetSkipDestroy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOrganizationId` <a name="ResetOrganizationId" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetOrganizationId"></a>

```csharp
private void ResetOrganizationId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSkipDestroy` <a name="ResetSkipDestroy" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetSkipDestroy"></a>

```csharp
private void ResetSkipDestroy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaLayerVersionPermission resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaLayerVersionPermission.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaLayerVersionPermission.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaLayerVersionPermission.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaLayerVersionPermission.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdaLayerVersionPermission resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaLayerVersionPermission to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaLayerVersionPermission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdaLayerVersionPermission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.revisionId">RevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.layerNameInput">LayerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.organizationIdInput">OrganizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.skipDestroyInput">SkipDestroyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.statementIdInput">StatementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.versionNumberInput">VersionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.layerName">LayerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.skipDestroy">SkipDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.statementId">StatementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.versionNumber">VersionNumber</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.revisionId"></a>

```csharp
public string RevisionId { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LayerNameInput`<sup>Optional</sup> <a name="LayerNameInput" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.layerNameInput"></a>

```csharp
public string LayerNameInput { get; }
```

- *Type:* string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.organizationIdInput"></a>

```csharp
public string OrganizationIdInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SkipDestroyInput`<sup>Optional</sup> <a name="SkipDestroyInput" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.skipDestroyInput"></a>

```csharp
public bool|IResolvable SkipDestroyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StatementIdInput`<sup>Optional</sup> <a name="StatementIdInput" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.statementIdInput"></a>

```csharp
public string StatementIdInput { get; }
```

- *Type:* string

---

##### `VersionNumberInput`<sup>Optional</sup> <a name="VersionNumberInput" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.versionNumberInput"></a>

```csharp
public double VersionNumberInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LayerName`<sup>Required</sup> <a name="LayerName" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.layerName"></a>

```csharp
public string LayerName { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SkipDestroy`<sup>Required</sup> <a name="SkipDestroy" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.skipDestroy"></a>

```csharp
public bool|IResolvable SkipDestroy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StatementId`<sup>Required</sup> <a name="StatementId" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.statementId"></a>

```csharp
public string StatementId { get; }
```

- *Type:* string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.versionNumber"></a>

```csharp
public double VersionNumber { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaLayerVersionPermissionConfig <a name="LambdaLayerVersionPermissionConfig" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaLayerVersionPermissionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Action,
    string LayerName,
    string Principal,
    string StatementId,
    double VersionNumber,
    string Id = null,
    string OrganizationId = null,
    string Region = null,
    bool|IResolvable SkipDestroy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#action LambdaLayerVersionPermission#action}. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.layerName">LayerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#layer_name LambdaLayerVersionPermission#layer_name}. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.principal">Principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#principal LambdaLayerVersionPermission#principal}. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.statementId">StatementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#statement_id LambdaLayerVersionPermission#statement_id}. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.versionNumber">VersionNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#version_number LambdaLayerVersionPermission#version_number}. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#id LambdaLayerVersionPermission#id}. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.organizationId">OrganizationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#organization_id LambdaLayerVersionPermission#organization_id}. |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.skipDestroy">SkipDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#skip_destroy LambdaLayerVersionPermission#skip_destroy}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#action LambdaLayerVersionPermission#action}.

---

##### `LayerName`<sup>Required</sup> <a name="LayerName" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.layerName"></a>

```csharp
public string LayerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#layer_name LambdaLayerVersionPermission#layer_name}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#principal LambdaLayerVersionPermission#principal}.

---

##### `StatementId`<sup>Required</sup> <a name="StatementId" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.statementId"></a>

```csharp
public string StatementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#statement_id LambdaLayerVersionPermission#statement_id}.

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.versionNumber"></a>

```csharp
public double VersionNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#version_number LambdaLayerVersionPermission#version_number}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#id LambdaLayerVersionPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrganizationId`<sup>Optional</sup> <a name="OrganizationId" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.organizationId"></a>

```csharp
public string OrganizationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#organization_id LambdaLayerVersionPermission#organization_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#region LambdaLayerVersionPermission#region}

---

##### `SkipDestroy`<sup>Optional</sup> <a name="SkipDestroy" id="@cdktn/provider-aws.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.skipDestroy"></a>

```csharp
public bool|IResolvable SkipDestroy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/lambda_layer_version_permission#skip_destroy LambdaLayerVersionPermission#skip_destroy}.

---



