# `opensearchserverlessVpcEndpoint` Submodule <a name="`opensearchserverlessVpcEndpoint` Submodule" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessVpcEndpoint <a name="OpensearchserverlessVpcEndpoint" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/opensearchserverless_vpc_endpoint aws_opensearchserverless_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OpensearchserverlessVpcEndpoint(Construct Scope, string Id, OpensearchserverlessVpcEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig">OpensearchserverlessVpcEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig">OpensearchserverlessVpcEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(OpensearchserverlessVpcEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts">OpensearchserverlessVpcEndpointTimeouts</a>

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserverlessVpcEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OpensearchserverlessVpcEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OpensearchserverlessVpcEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OpensearchserverlessVpcEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OpensearchserverlessVpcEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OpensearchserverlessVpcEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchserverlessVpcEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchserverlessVpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/opensearchserverless_vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessVpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference">OpensearchserverlessVpcEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts">OpensearchserverlessVpcEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.timeouts"></a>

```csharp
public OpensearchserverlessVpcEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference">OpensearchserverlessVpcEndpointTimeoutsOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.timeoutsInput"></a>

```csharp
public IResolvable|OpensearchserverlessVpcEndpointTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts">OpensearchserverlessVpcEndpointTimeouts</a>

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessVpcEndpointConfig <a name="OpensearchserverlessVpcEndpointConfig" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OpensearchserverlessVpcEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string[] SubnetIds,
    string VpcId,
    string Region = null,
    string[] SecurityGroupIds = null,
    OpensearchserverlessVpcEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.name">Name</a></code> | <code>string</code> | Name of the interface endpoint. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | One or more subnet IDs from which you'll access OpenSearch Serverless. Up to 6 subnets can be provided. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.vpcId">VpcId</a></code> | <code>string</code> | ID of the VPC from which you'll access OpenSearch Serverless. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | One or more security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts">OpensearchserverlessVpcEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the interface endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/opensearchserverless_vpc_endpoint#name OpensearchserverlessVpcEndpoint#name}

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

One or more subnet IDs from which you'll access OpenSearch Serverless. Up to 6 subnets can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/opensearchserverless_vpc_endpoint#subnet_ids OpensearchserverlessVpcEndpoint#subnet_ids}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

ID of the VPC from which you'll access OpenSearch Serverless.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/opensearchserverless_vpc_endpoint#vpc_id OpensearchserverlessVpcEndpoint#vpc_id}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/opensearchserverless_vpc_endpoint#region OpensearchserverlessVpcEndpoint#region}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

One or more security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.

Up to 5 security groups can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/opensearchserverless_vpc_endpoint#security_group_ids OpensearchserverlessVpcEndpoint#security_group_ids}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.timeouts"></a>

```csharp
public OpensearchserverlessVpcEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts">OpensearchserverlessVpcEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/opensearchserverless_vpc_endpoint#timeouts OpensearchserverlessVpcEndpoint#timeouts}

---

### OpensearchserverlessVpcEndpointTimeouts <a name="OpensearchserverlessVpcEndpointTimeouts" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OpensearchserverlessVpcEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/opensearchserverless_vpc_endpoint#create OpensearchserverlessVpcEndpoint#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/opensearchserverless_vpc_endpoint#delete OpensearchserverlessVpcEndpoint#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/opensearchserverless_vpc_endpoint#update OpensearchserverlessVpcEndpoint#update}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessVpcEndpointTimeoutsOutputReference <a name="OpensearchserverlessVpcEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OpensearchserverlessVpcEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts">OpensearchserverlessVpcEndpointTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserverlessVpcEndpointTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts">OpensearchserverlessVpcEndpointTimeouts</a>

---



