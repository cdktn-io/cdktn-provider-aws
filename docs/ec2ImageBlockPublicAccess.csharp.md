# `ec2ImageBlockPublicAccess` Submodule <a name="`ec2ImageBlockPublicAccess` Submodule" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ImageBlockPublicAccess <a name="Ec2ImageBlockPublicAccess" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_image_block_public_access aws_ec2_image_block_public_access}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2ImageBlockPublicAccess(Construct Scope, string Id, Ec2ImageBlockPublicAccessConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig">Ec2ImageBlockPublicAccessConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig">Ec2ImageBlockPublicAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.putTimeouts"></a>

```csharp
private void PutTimeouts(Ec2ImageBlockPublicAccessTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts">Ec2ImageBlockPublicAccessTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2ImageBlockPublicAccess resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2ImageBlockPublicAccess.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2ImageBlockPublicAccess.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2ImageBlockPublicAccess.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2ImageBlockPublicAccess.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2ImageBlockPublicAccess resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2ImageBlockPublicAccess to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2ImageBlockPublicAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_image_block_public_access#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2ImageBlockPublicAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference">Ec2ImageBlockPublicAccessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts">Ec2ImageBlockPublicAccessTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.timeouts"></a>

```csharp
public Ec2ImageBlockPublicAccessTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference">Ec2ImageBlockPublicAccessTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.timeoutsInput"></a>

```csharp
public IResolvable|Ec2ImageBlockPublicAccessTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts">Ec2ImageBlockPublicAccessTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ImageBlockPublicAccessConfig <a name="Ec2ImageBlockPublicAccessConfig" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2ImageBlockPublicAccessConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string State,
    string Id = null,
    string Region = null,
    Ec2ImageBlockPublicAccessTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_image_block_public_access#state Ec2ImageBlockPublicAccess#state}. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_image_block_public_access#id Ec2ImageBlockPublicAccess#id}. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts">Ec2ImageBlockPublicAccessTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_image_block_public_access#state Ec2ImageBlockPublicAccess#state}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_image_block_public_access#id Ec2ImageBlockPublicAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_image_block_public_access#region Ec2ImageBlockPublicAccess#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.timeouts"></a>

```csharp
public Ec2ImageBlockPublicAccessTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts">Ec2ImageBlockPublicAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_image_block_public_access#timeouts Ec2ImageBlockPublicAccess#timeouts}

---

### Ec2ImageBlockPublicAccessTimeouts <a name="Ec2ImageBlockPublicAccessTimeouts" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2ImageBlockPublicAccessTimeouts {
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_image_block_public_access#update Ec2ImageBlockPublicAccess#update}. |

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_image_block_public_access#update Ec2ImageBlockPublicAccess#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ImageBlockPublicAccessTimeoutsOutputReference <a name="Ec2ImageBlockPublicAccessTimeoutsOutputReference" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2ImageBlockPublicAccessTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts">Ec2ImageBlockPublicAccessTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ImageBlockPublicAccessTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts">Ec2ImageBlockPublicAccessTimeouts</a>

---



