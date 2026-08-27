# `defaultVpcDhcpOptions` Submodule <a name="`defaultVpcDhcpOptions` Submodule" id="@cdktn/provider-aws.defaultVpcDhcpOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultVpcDhcpOptions <a name="DefaultVpcDhcpOptions" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/default_vpc_dhcp_options aws_default_vpc_dhcp_options}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DefaultVpcDhcpOptions(Construct Scope, string Id, DefaultVpcDhcpOptionsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig">DefaultVpcDhcpOptionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig">DefaultVpcDhcpOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOwnerId">ResetOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOwnerId` <a name="ResetOwnerId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOwnerId"></a>

```csharp
private void ResetOwnerId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DefaultVpcDhcpOptions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DefaultVpcDhcpOptions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DefaultVpcDhcpOptions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DefaultVpcDhcpOptions.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DefaultVpcDhcpOptions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DefaultVpcDhcpOptions resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DefaultVpcDhcpOptions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DefaultVpcDhcpOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/default_vpc_dhcp_options#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DefaultVpcDhcpOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainNameServers">DomainNameServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ipv6AddressPreferredLeaseTime">Ipv6AddressPreferredLeaseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNameServers">NetbiosNameServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNodeType">NetbiosNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ntpServers">NtpServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerIdInput">OwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `DomainNameServers`<sup>Required</sup> <a name="DomainNameServers" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainNameServers"></a>

```csharp
public string DomainNameServers { get; }
```

- *Type:* string

---

##### `Ipv6AddressPreferredLeaseTime`<sup>Required</sup> <a name="Ipv6AddressPreferredLeaseTime" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ipv6AddressPreferredLeaseTime"></a>

```csharp
public string Ipv6AddressPreferredLeaseTime { get; }
```

- *Type:* string

---

##### `NetbiosNameServers`<sup>Required</sup> <a name="NetbiosNameServers" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNameServers"></a>

```csharp
public string NetbiosNameServers { get; }
```

- *Type:* string

---

##### `NetbiosNodeType`<sup>Required</sup> <a name="NetbiosNodeType" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNodeType"></a>

```csharp
public string NetbiosNodeType { get; }
```

- *Type:* string

---

##### `NtpServers`<sup>Required</sup> <a name="NtpServers" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ntpServers"></a>

```csharp
public string NtpServers { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OwnerIdInput`<sup>Optional</sup> <a name="OwnerIdInput" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerIdInput"></a>

```csharp
public string OwnerIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultVpcDhcpOptionsConfig <a name="DefaultVpcDhcpOptionsConfig" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DefaultVpcDhcpOptionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string OwnerId = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/default_vpc_dhcp_options#id DefaultVpcDhcpOptions#id}. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.ownerId">OwnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/default_vpc_dhcp_options#owner_id DefaultVpcDhcpOptions#owner_id}. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/default_vpc_dhcp_options#tags DefaultVpcDhcpOptions#tags}. |
| <code><a href="#@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/default_vpc_dhcp_options#tags_all DefaultVpcDhcpOptions#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/default_vpc_dhcp_options#id DefaultVpcDhcpOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OwnerId`<sup>Optional</sup> <a name="OwnerId" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.ownerId"></a>

```csharp
public string OwnerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/default_vpc_dhcp_options#owner_id DefaultVpcDhcpOptions#owner_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/default_vpc_dhcp_options#region DefaultVpcDhcpOptions#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/default_vpc_dhcp_options#tags DefaultVpcDhcpOptions#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/default_vpc_dhcp_options#tags_all DefaultVpcDhcpOptions#tags_all}.

---



