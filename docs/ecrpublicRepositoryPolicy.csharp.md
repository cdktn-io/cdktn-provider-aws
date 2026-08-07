# `ecrpublicRepositoryPolicy` Submodule <a name="`ecrpublicRepositoryPolicy` Submodule" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrpublicRepositoryPolicy <a name="EcrpublicRepositoryPolicy" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecrpublic_repository_policy aws_ecrpublic_repository_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcrpublicRepositoryPolicy(Construct Scope, string Id, EcrpublicRepositoryPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig">EcrpublicRepositoryPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig">EcrpublicRepositoryPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EcrpublicRepositoryPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EcrpublicRepositoryPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EcrpublicRepositoryPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EcrpublicRepositoryPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EcrpublicRepositoryPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EcrpublicRepositoryPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcrpublicRepositoryPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcrpublicRepositoryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecrpublic_repository_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EcrpublicRepositoryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.registryId">RegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.registryId"></a>

```csharp
public string RegistryId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.repositoryNameInput"></a>

```csharp
public string RepositoryNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrpublicRepositoryPolicyConfig <a name="EcrpublicRepositoryPolicyConfig" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcrpublicRepositoryPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Policy,
    string RepositoryName,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecrpublic_repository_policy#policy EcrpublicRepositoryPolicy#policy}. |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.repositoryName">RepositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecrpublic_repository_policy#repository_name EcrpublicRepositoryPolicy#repository_name}. |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecrpublic_repository_policy#id EcrpublicRepositoryPolicy#id}. |
| <code><a href="#@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecrpublic_repository_policy#policy EcrpublicRepositoryPolicy#policy}.

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.repositoryName"></a>

```csharp
public string RepositoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecrpublic_repository_policy#repository_name EcrpublicRepositoryPolicy#repository_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecrpublic_repository_policy#id EcrpublicRepositoryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ecrpublicRepositoryPolicy.EcrpublicRepositoryPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecrpublic_repository_policy#region EcrpublicRepositoryPolicy#region}

---



