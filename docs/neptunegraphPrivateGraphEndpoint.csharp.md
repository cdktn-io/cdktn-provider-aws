# `neptunegraphPrivateGraphEndpoint` Submodule <a name="`neptunegraphPrivateGraphEndpoint` Submodule" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptunegraphPrivateGraphEndpoint <a name="NeptunegraphPrivateGraphEndpoint" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint aws_neptunegraph_private_graph_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NeptunegraphPrivateGraphEndpoint(Construct Scope, string Id, NeptunegraphPrivateGraphEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig">NeptunegraphPrivateGraphEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig">NeptunegraphPrivateGraphEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(NeptunegraphPrivateGraphEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts">NeptunegraphPrivateGraphEndpointTimeouts</a>

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NeptunegraphPrivateGraphEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NeptunegraphPrivateGraphEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NeptunegraphPrivateGraphEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NeptunegraphPrivateGraphEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NeptunegraphPrivateGraphEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NeptunegraphPrivateGraphEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NeptunegraphPrivateGraphEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NeptunegraphPrivateGraphEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NeptunegraphPrivateGraphEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.privateGraphEndpointIdentifier">PrivateGraphEndpointIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference">NeptunegraphPrivateGraphEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifierInput">GraphIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts">NeptunegraphPrivateGraphEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifier">GraphIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PrivateGraphEndpointIdentifier`<sup>Required</sup> <a name="PrivateGraphEndpointIdentifier" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.privateGraphEndpointIdentifier"></a>

```csharp
public string PrivateGraphEndpointIdentifier { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.timeouts"></a>

```csharp
public NeptunegraphPrivateGraphEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference">NeptunegraphPrivateGraphEndpointTimeoutsOutputReference</a>

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `GraphIdentifierInput`<sup>Optional</sup> <a name="GraphIdentifierInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifierInput"></a>

```csharp
public string GraphIdentifierInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.timeoutsInput"></a>

```csharp
public IResolvable|NeptunegraphPrivateGraphEndpointTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts">NeptunegraphPrivateGraphEndpointTimeouts</a>

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `GraphIdentifier`<sup>Required</sup> <a name="GraphIdentifier" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifier"></a>

```csharp
public string GraphIdentifier { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptunegraphPrivateGraphEndpointConfig <a name="NeptunegraphPrivateGraphEndpointConfig" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NeptunegraphPrivateGraphEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GraphIdentifier,
    string VpcId,
    string Region = null,
    string[] SubnetIds = null,
    NeptunegraphPrivateGraphEndpointTimeouts Timeouts = null,
    string[] VpcSecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.graphIdentifier">GraphIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#graph_identifier NeptunegraphPrivateGraphEndpoint#graph_identifier}. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#vpc_id NeptunegraphPrivateGraphEndpoint#vpc_id}. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#subnet_ids NeptunegraphPrivateGraphEndpoint#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts">NeptunegraphPrivateGraphEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#vpc_security_group_ids NeptunegraphPrivateGraphEndpoint#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GraphIdentifier`<sup>Required</sup> <a name="GraphIdentifier" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.graphIdentifier"></a>

```csharp
public string GraphIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#graph_identifier NeptunegraphPrivateGraphEndpoint#graph_identifier}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#vpc_id NeptunegraphPrivateGraphEndpoint#vpc_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#region NeptunegraphPrivateGraphEndpoint#region}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#subnet_ids NeptunegraphPrivateGraphEndpoint#subnet_ids}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.timeouts"></a>

```csharp
public NeptunegraphPrivateGraphEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts">NeptunegraphPrivateGraphEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#timeouts NeptunegraphPrivateGraphEndpoint#timeouts}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#vpc_security_group_ids NeptunegraphPrivateGraphEndpoint#vpc_security_group_ids}.

---

### NeptunegraphPrivateGraphEndpointTimeouts <a name="NeptunegraphPrivateGraphEndpointTimeouts" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NeptunegraphPrivateGraphEndpointTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#create NeptunegraphPrivateGraphEndpoint#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#delete NeptunegraphPrivateGraphEndpoint#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### NeptunegraphPrivateGraphEndpointTimeoutsOutputReference <a name="NeptunegraphPrivateGraphEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NeptunegraphPrivateGraphEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts">NeptunegraphPrivateGraphEndpointTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NeptunegraphPrivateGraphEndpointTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts">NeptunegraphPrivateGraphEndpointTimeouts</a>

---



