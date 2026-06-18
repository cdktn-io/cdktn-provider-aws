# `defaultNetworkAcl` Submodule <a name="`defaultNetworkAcl` Submodule" id="@cdktn/provider-aws.defaultNetworkAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultNetworkAcl <a name="DefaultNetworkAcl" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl aws_default_network_acl}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DefaultNetworkAcl(Construct Scope, string Id, DefaultNetworkAclConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig">DefaultNetworkAclConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig">DefaultNetworkAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putEgress">PutEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putIngress">PutIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetEgress">ResetEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetIngress">ResetIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgress` <a name="PutEgress" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putEgress"></a>

```csharp
private void PutEgress(IResolvable|DefaultNetworkAclEgress[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putEgress.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>[]

---

##### `PutIngress` <a name="PutIngress" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putIngress"></a>

```csharp
private void PutIngress(IResolvable|DefaultNetworkAclIngress[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putIngress.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>[]

---

##### `ResetEgress` <a name="ResetEgress" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetEgress"></a>

```csharp
private void ResetEgress()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIngress` <a name="ResetIngress" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetIngress"></a>

```csharp
private void ResetIngress()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DefaultNetworkAcl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DefaultNetworkAcl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DefaultNetworkAcl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DefaultNetworkAcl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DefaultNetworkAcl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DefaultNetworkAcl resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DefaultNetworkAcl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DefaultNetworkAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DefaultNetworkAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egress">Egress</a></code> | <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList">DefaultNetworkAclEgressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingress">Ingress</a></code> | <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList">DefaultNetworkAclIngressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclIdInput">DefaultNetworkAclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egressInput">EgressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingressInput">IngressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclId">DefaultNetworkAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egress"></a>

```csharp
public DefaultNetworkAclEgressList Egress { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList">DefaultNetworkAclEgressList</a>

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingress"></a>

```csharp
public DefaultNetworkAclIngressList Ingress { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList">DefaultNetworkAclIngressList</a>

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `DefaultNetworkAclIdInput`<sup>Optional</sup> <a name="DefaultNetworkAclIdInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclIdInput"></a>

```csharp
public string DefaultNetworkAclIdInput { get; }
```

- *Type:* string

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egressInput"></a>

```csharp
public IResolvable|DefaultNetworkAclEgress[] EgressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingressInput"></a>

```csharp
public IResolvable|DefaultNetworkAclIngress[] IngressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultNetworkAclId`<sup>Required</sup> <a name="DefaultNetworkAclId" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclId"></a>

```csharp
public string DefaultNetworkAclId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultNetworkAclConfig <a name="DefaultNetworkAclConfig" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DefaultNetworkAclConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DefaultNetworkAclId,
    IResolvable|DefaultNetworkAclEgress[] Egress = null,
    string Id = null,
    IResolvable|DefaultNetworkAclIngress[] Ingress = null,
    string Region = null,
    string[] SubnetIds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.defaultNetworkAclId">DefaultNetworkAclId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.egress">Egress</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>[]</code> | egress block. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#id DefaultNetworkAcl#id}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.ingress">Ingress</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>[]</code> | ingress block. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#subnet_ids DefaultNetworkAcl#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#tags DefaultNetworkAcl#tags}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#tags_all DefaultNetworkAcl#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultNetworkAclId`<sup>Required</sup> <a name="DefaultNetworkAclId" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.defaultNetworkAclId"></a>

```csharp
public string DefaultNetworkAclId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}.

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.egress"></a>

```csharp
public IResolvable|DefaultNetworkAclEgress[] Egress { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>[]

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#egress DefaultNetworkAcl#egress}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#id DefaultNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.ingress"></a>

```csharp
public IResolvable|DefaultNetworkAclIngress[] Ingress { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>[]

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#ingress DefaultNetworkAcl#ingress}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#region DefaultNetworkAcl#region}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#subnet_ids DefaultNetworkAcl#subnet_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#tags DefaultNetworkAcl#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#tags_all DefaultNetworkAcl#tags_all}.

---

### DefaultNetworkAclEgress <a name="DefaultNetworkAclEgress" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DefaultNetworkAclEgress {
    string Action,
    double FromPort,
    string Protocol,
    double RuleNo,
    double ToPort,
    string CidrBlock = null,
    double IcmpCode = null,
    double IcmpType = null,
    string Ipv6CidrBlock = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#action DefaultNetworkAcl#action}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#from_port DefaultNetworkAcl#from_port}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#protocol DefaultNetworkAcl#protocol}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ruleNo">RuleNo</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#rule_no DefaultNetworkAcl#rule_no}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#to_port DefaultNetworkAcl#to_port}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpCode">IcmpCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpType">IcmpType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#action DefaultNetworkAcl#action}.

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#from_port DefaultNetworkAcl#from_port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#protocol DefaultNetworkAcl#protocol}.

---

##### `RuleNo`<sup>Required</sup> <a name="RuleNo" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ruleNo"></a>

```csharp
public double RuleNo { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#rule_no DefaultNetworkAcl#rule_no}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#to_port DefaultNetworkAcl#to_port}.

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}.

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpCode"></a>

```csharp
public double IcmpCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}.

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpType"></a>

```csharp
public double IcmpType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}.

---

### DefaultNetworkAclIngress <a name="DefaultNetworkAclIngress" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DefaultNetworkAclIngress {
    string Action,
    double FromPort,
    string Protocol,
    double RuleNo,
    double ToPort,
    string CidrBlock = null,
    double IcmpCode = null,
    double IcmpType = null,
    string Ipv6CidrBlock = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#action DefaultNetworkAcl#action}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#from_port DefaultNetworkAcl#from_port}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#protocol DefaultNetworkAcl#protocol}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ruleNo">RuleNo</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#rule_no DefaultNetworkAcl#rule_no}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#to_port DefaultNetworkAcl#to_port}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpCode">IcmpCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpType">IcmpType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#action DefaultNetworkAcl#action}.

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#from_port DefaultNetworkAcl#from_port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#protocol DefaultNetworkAcl#protocol}.

---

##### `RuleNo`<sup>Required</sup> <a name="RuleNo" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ruleNo"></a>

```csharp
public double RuleNo { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#rule_no DefaultNetworkAcl#rule_no}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#to_port DefaultNetworkAcl#to_port}.

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}.

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpCode"></a>

```csharp
public double IcmpCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}.

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpType"></a>

```csharp
public double IcmpType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultNetworkAclEgressList <a name="DefaultNetworkAclEgressList" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DefaultNetworkAclEgressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.get"></a>

```csharp
private DefaultNetworkAclEgressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.internalValue"></a>

```csharp
public IResolvable|DefaultNetworkAclEgress[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>[]

---


### DefaultNetworkAclEgressOutputReference <a name="DefaultNetworkAclEgressOutputReference" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DefaultNetworkAclEgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetCidrBlock"></a>

```csharp
private void ResetCidrBlock()
```

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpCode"></a>

```csharp
private void ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpType"></a>

```csharp
private void ResetIcmpType()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIpv6CidrBlock"></a>

```csharp
private void ResetIpv6CidrBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNoInput">RuleNoInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCode">IcmpCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpType">IcmpType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNo">RuleNo</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCodeInput"></a>

```csharp
public double IcmpCodeInput { get; }
```

- *Type:* double

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpTypeInput"></a>

```csharp
public double IcmpTypeInput { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlockInput"></a>

```csharp
public string Ipv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RuleNoInput`<sup>Optional</sup> <a name="RuleNoInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNoInput"></a>

```csharp
public double RuleNoInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCode"></a>

```csharp
public double IcmpCode { get; }
```

- *Type:* double

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpType"></a>

```csharp
public double IcmpType { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RuleNo`<sup>Required</sup> <a name="RuleNo" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNo"></a>

```csharp
public double RuleNo { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DefaultNetworkAclEgress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>

---


### DefaultNetworkAclIngressList <a name="DefaultNetworkAclIngressList" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DefaultNetworkAclIngressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.get"></a>

```csharp
private DefaultNetworkAclIngressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.internalValue"></a>

```csharp
public IResolvable|DefaultNetworkAclIngress[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>[]

---


### DefaultNetworkAclIngressOutputReference <a name="DefaultNetworkAclIngressOutputReference" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DefaultNetworkAclIngressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetCidrBlock"></a>

```csharp
private void ResetCidrBlock()
```

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpCode"></a>

```csharp
private void ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpType"></a>

```csharp
private void ResetIcmpType()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIpv6CidrBlock"></a>

```csharp
private void ResetIpv6CidrBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNoInput">RuleNoInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCode">IcmpCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpType">IcmpType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNo">RuleNo</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCodeInput"></a>

```csharp
public double IcmpCodeInput { get; }
```

- *Type:* double

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpTypeInput"></a>

```csharp
public double IcmpTypeInput { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlockInput"></a>

```csharp
public string Ipv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RuleNoInput`<sup>Optional</sup> <a name="RuleNoInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNoInput"></a>

```csharp
public double RuleNoInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCode"></a>

```csharp
public double IcmpCode { get; }
```

- *Type:* double

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpType"></a>

```csharp
public double IcmpType { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RuleNo`<sup>Required</sup> <a name="RuleNo" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNo"></a>

```csharp
public double RuleNo { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DefaultNetworkAclIngress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>

---



