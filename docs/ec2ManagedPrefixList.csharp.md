# `ec2ManagedPrefixList` Submodule <a name="`ec2ManagedPrefixList` Submodule" id="@cdktn/provider-aws.ec2ManagedPrefixList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ManagedPrefixList <a name="Ec2ManagedPrefixList" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list aws_ec2_managed_prefix_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2ManagedPrefixList(Construct Scope, string Id, Ec2ManagedPrefixListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig">Ec2ManagedPrefixListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig">Ec2ManagedPrefixListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.putEntry">PutEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetEntry">ResetEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntry` <a name="PutEntry" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.putEntry"></a>

```csharp
private void PutEntry(IResolvable|Ec2ManagedPrefixListEntry[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.putEntry.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>[]

---

##### `ResetEntry` <a name="ResetEntry" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetEntry"></a>

```csharp
private void ResetEntry()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2ManagedPrefixList resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2ManagedPrefixList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2ManagedPrefixList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2ManagedPrefixList.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2ManagedPrefixList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2ManagedPrefixList resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2ManagedPrefixList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2ManagedPrefixList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2ManagedPrefixList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entry">Entry</a></code> | <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList">Ec2ManagedPrefixListEntryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamilyInput">AddressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entryInput">EntryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntriesInput">MaxEntriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamily">AddressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntries">MaxEntries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entry"></a>

```csharp
public Ec2ManagedPrefixListEntryList Entry { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList">Ec2ManagedPrefixListEntryList</a>

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `AddressFamilyInput`<sup>Optional</sup> <a name="AddressFamilyInput" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamilyInput"></a>

```csharp
public string AddressFamilyInput { get; }
```

- *Type:* string

---

##### `EntryInput`<sup>Optional</sup> <a name="EntryInput" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entryInput"></a>

```csharp
public IResolvable|Ec2ManagedPrefixListEntry[] EntryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxEntriesInput`<sup>Optional</sup> <a name="MaxEntriesInput" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntriesInput"></a>

```csharp
public double MaxEntriesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamily"></a>

```csharp
public string AddressFamily { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxEntries`<sup>Required</sup> <a name="MaxEntries" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntries"></a>

```csharp
public double MaxEntries { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ManagedPrefixListConfig <a name="Ec2ManagedPrefixListConfig" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2ManagedPrefixListConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AddressFamily,
    double MaxEntries,
    string Name,
    IResolvable|Ec2ManagedPrefixListEntry[] Entry = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.addressFamily">AddressFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#address_family Ec2ManagedPrefixList#address_family}. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.maxEntries">MaxEntries</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#max_entries Ec2ManagedPrefixList#max_entries}. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#name Ec2ManagedPrefixList#name}. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.entry">Entry</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>[]</code> | entry block. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#id Ec2ManagedPrefixList#id}. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#tags Ec2ManagedPrefixList#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#tags_all Ec2ManagedPrefixList#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.addressFamily"></a>

```csharp
public string AddressFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#address_family Ec2ManagedPrefixList#address_family}.

---

##### `MaxEntries`<sup>Required</sup> <a name="MaxEntries" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.maxEntries"></a>

```csharp
public double MaxEntries { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#max_entries Ec2ManagedPrefixList#max_entries}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#name Ec2ManagedPrefixList#name}.

---

##### `Entry`<sup>Optional</sup> <a name="Entry" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.entry"></a>

```csharp
public IResolvable|Ec2ManagedPrefixListEntry[] Entry { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>[]

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#entry Ec2ManagedPrefixList#entry}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#id Ec2ManagedPrefixList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#region Ec2ManagedPrefixList#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#tags Ec2ManagedPrefixList#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#tags_all Ec2ManagedPrefixList#tags_all}.

---

### Ec2ManagedPrefixListEntry <a name="Ec2ManagedPrefixListEntry" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2ManagedPrefixListEntry {
    string Cidr,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#cidr Ec2ManagedPrefixList#cidr}. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#description Ec2ManagedPrefixList#description}. |

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#cidr Ec2ManagedPrefixList#cidr}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_managed_prefix_list#description Ec2ManagedPrefixList#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ManagedPrefixListEntryList <a name="Ec2ManagedPrefixListEntryList" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2ManagedPrefixListEntryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.get"></a>

```csharp
private Ec2ManagedPrefixListEntryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.internalValue"></a>

```csharp
public IResolvable|Ec2ManagedPrefixListEntry[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>[]

---


### Ec2ManagedPrefixListEntryOutputReference <a name="Ec2ManagedPrefixListEntryOutputReference" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2ManagedPrefixListEntryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ManagedPrefixListEntry InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>

---



