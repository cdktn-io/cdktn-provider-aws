# `opensearchVpcEndpoint` Submodule <a name="`opensearchVpcEndpoint` Submodule" id="@cdktn/provider-aws.opensearchVpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchVpcEndpoint <a name="OpensearchVpcEndpoint" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint aws_opensearch_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OpensearchVpcEndpoint(Construct Scope, string Id, OpensearchVpcEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig">OpensearchVpcEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig">OpensearchVpcEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.putVpcOptions">PutVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(OpensearchVpcEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeouts">OpensearchVpcEndpointTimeouts</a>

---

##### `PutVpcOptions` <a name="PutVpcOptions" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.putVpcOptions"></a>

```csharp
private void PutVpcOptions(OpensearchVpcEndpointVpcOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptions">OpensearchVpcEndpointVpcOptions</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchVpcEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OpensearchVpcEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OpensearchVpcEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OpensearchVpcEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OpensearchVpcEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OpensearchVpcEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchVpcEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchVpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchVpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference">OpensearchVpcEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference">OpensearchVpcEndpointVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.domainArnInput">DomainArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeouts">OpensearchVpcEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.vpcOptionsInput">VpcOptionsInput</a></code> | <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptions">OpensearchVpcEndpointVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.domainArn">DomainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.timeouts"></a>

```csharp
public OpensearchVpcEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference">OpensearchVpcEndpointTimeoutsOutputReference</a>

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.vpcOptions"></a>

```csharp
public OpensearchVpcEndpointVpcOptionsOutputReference VpcOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference">OpensearchVpcEndpointVpcOptionsOutputReference</a>

---

##### `DomainArnInput`<sup>Optional</sup> <a name="DomainArnInput" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.domainArnInput"></a>

```csharp
public string DomainArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.timeoutsInput"></a>

```csharp
public IResolvable|OpensearchVpcEndpointTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeouts">OpensearchVpcEndpointTimeouts</a>

---

##### `VpcOptionsInput`<sup>Optional</sup> <a name="VpcOptionsInput" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.vpcOptionsInput"></a>

```csharp
public OpensearchVpcEndpointVpcOptions VpcOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptions">OpensearchVpcEndpointVpcOptions</a>

---

##### `DomainArn`<sup>Required</sup> <a name="DomainArn" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.domainArn"></a>

```csharp
public string DomainArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchVpcEndpointConfig <a name="OpensearchVpcEndpointConfig" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OpensearchVpcEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainArn,
    OpensearchVpcEndpointVpcOptions VpcOptions,
    string Id = null,
    string Region = null,
    OpensearchVpcEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.domainArn">DomainArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#domain_arn OpensearchVpcEndpoint#domain_arn}. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptions">OpensearchVpcEndpointVpcOptions</a></code> | vpc_options block. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#id OpensearchVpcEndpoint#id}. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeouts">OpensearchVpcEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainArn`<sup>Required</sup> <a name="DomainArn" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.domainArn"></a>

```csharp
public string DomainArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#domain_arn OpensearchVpcEndpoint#domain_arn}.

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.vpcOptions"></a>

```csharp
public OpensearchVpcEndpointVpcOptions VpcOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptions">OpensearchVpcEndpointVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#vpc_options OpensearchVpcEndpoint#vpc_options}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#id OpensearchVpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#region OpensearchVpcEndpoint#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointConfig.property.timeouts"></a>

```csharp
public OpensearchVpcEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeouts">OpensearchVpcEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#timeouts OpensearchVpcEndpoint#timeouts}

---

### OpensearchVpcEndpointTimeouts <a name="OpensearchVpcEndpointTimeouts" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OpensearchVpcEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#create OpensearchVpcEndpoint#create}. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#delete OpensearchVpcEndpoint#delete}. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#update OpensearchVpcEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#create OpensearchVpcEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#delete OpensearchVpcEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#update OpensearchVpcEndpoint#update}.

---

### OpensearchVpcEndpointVpcOptions <a name="OpensearchVpcEndpointVpcOptions" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OpensearchVpcEndpointVpcOptions {
    string[] SubnetIds,
    string[] SecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptions.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#subnet_ids OpensearchVpcEndpoint#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptions.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#security_group_ids OpensearchVpcEndpoint#security_group_ids}. |

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptions.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#subnet_ids OpensearchVpcEndpoint#subnet_ids}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptions.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/opensearch_vpc_endpoint#security_group_ids OpensearchVpcEndpoint#security_group_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchVpcEndpointTimeoutsOutputReference <a name="OpensearchVpcEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OpensearchVpcEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeouts">OpensearchVpcEndpointTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchVpcEndpointTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointTimeouts">OpensearchVpcEndpointTimeouts</a>

---


### OpensearchVpcEndpointVpcOptionsOutputReference <a name="OpensearchVpcEndpointVpcOptionsOutputReference" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OpensearchVpcEndpointVpcOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptions">OpensearchVpcEndpointVpcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptionsOutputReference.property.internalValue"></a>

```csharp
public OpensearchVpcEndpointVpcOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchVpcEndpoint.OpensearchVpcEndpointVpcOptions">OpensearchVpcEndpointVpcOptions</a>

---



