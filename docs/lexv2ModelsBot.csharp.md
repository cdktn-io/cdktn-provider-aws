# `lexv2ModelsBot` Submodule <a name="`lexv2ModelsBot` Submodule" id="@cdktn/provider-aws.lexv2ModelsBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Lexv2ModelsBot <a name="Lexv2ModelsBot" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot aws_lexv2models_bot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Lexv2ModelsBot(Construct Scope, string Id, Lexv2ModelsBotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig">Lexv2ModelsBotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig">Lexv2ModelsBotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putDataPrivacy">PutDataPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putMembers">PutMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetDataPrivacy">ResetDataPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetMembers">ResetMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTestBotAliasTags">ResetTestBotAliasTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataPrivacy` <a name="PutDataPrivacy" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putDataPrivacy"></a>

```csharp
private void PutDataPrivacy(IResolvable|Lexv2ModelsBotDataPrivacy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putDataPrivacy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>[]

---

##### `PutMembers` <a name="PutMembers" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putMembers"></a>

```csharp
private void PutMembers(IResolvable|Lexv2ModelsBotMembers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putMembers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putTimeouts"></a>

```csharp
private void PutTimeouts(Lexv2ModelsBotTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a>

---

##### `ResetDataPrivacy` <a name="ResetDataPrivacy" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetDataPrivacy"></a>

```csharp
private void ResetDataPrivacy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMembers` <a name="ResetMembers" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetMembers"></a>

```csharp
private void ResetMembers()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTestBotAliasTags` <a name="ResetTestBotAliasTags" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTestBotAliasTags"></a>

```csharp
private void ResetTestBotAliasTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Lexv2ModelsBot resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Lexv2ModelsBot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Lexv2ModelsBot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Lexv2ModelsBot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Lexv2ModelsBot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Lexv2ModelsBot resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Lexv2ModelsBot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Lexv2ModelsBot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Lexv2ModelsBot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dataPrivacy">DataPrivacy</a></code> | <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList">Lexv2ModelsBotDataPrivacyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.members">Members</a></code> | <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList">Lexv2ModelsBotMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference">Lexv2ModelsBotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dataPrivacyInput">DataPrivacyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.idleSessionTtlInSecondsInput">IdleSessionTtlInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.membersInput">MembersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.testBotAliasTagsInput">TestBotAliasTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.idleSessionTtlInSeconds">IdleSessionTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.testBotAliasTags">TestBotAliasTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DataPrivacy`<sup>Required</sup> <a name="DataPrivacy" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dataPrivacy"></a>

```csharp
public Lexv2ModelsBotDataPrivacyList DataPrivacy { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList">Lexv2ModelsBotDataPrivacyList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.members"></a>

```csharp
public Lexv2ModelsBotMembersList Members { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList">Lexv2ModelsBotMembersList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.timeouts"></a>

```csharp
public Lexv2ModelsBotTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference">Lexv2ModelsBotTimeoutsOutputReference</a>

---

##### `DataPrivacyInput`<sup>Optional</sup> <a name="DataPrivacyInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.dataPrivacyInput"></a>

```csharp
public IResolvable|Lexv2ModelsBotDataPrivacy[] DataPrivacyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdleSessionTtlInSecondsInput`<sup>Optional</sup> <a name="IdleSessionTtlInSecondsInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.idleSessionTtlInSecondsInput"></a>

```csharp
public double IdleSessionTtlInSecondsInput { get; }
```

- *Type:* double

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.membersInput"></a>

```csharp
public IResolvable|Lexv2ModelsBotMembers[] MembersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TestBotAliasTagsInput`<sup>Optional</sup> <a name="TestBotAliasTagsInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.testBotAliasTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TestBotAliasTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.timeoutsInput"></a>

```csharp
public IResolvable|Lexv2ModelsBotTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IdleSessionTtlInSeconds`<sup>Required</sup> <a name="IdleSessionTtlInSeconds" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.idleSessionTtlInSeconds"></a>

```csharp
public double IdleSessionTtlInSeconds { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TestBotAliasTags`<sup>Required</sup> <a name="TestBotAliasTags" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.testBotAliasTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TestBotAliasTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Lexv2ModelsBotConfig <a name="Lexv2ModelsBotConfig" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Lexv2ModelsBotConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double IdleSessionTtlInSeconds,
    string Name,
    string RoleArn,
    IResolvable|Lexv2ModelsBotDataPrivacy[] DataPrivacy = null,
    string Description = null,
    IResolvable|Lexv2ModelsBotMembers[] Members = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TestBotAliasTags = null,
    Lexv2ModelsBotTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.idleSessionTtlInSeconds">IdleSessionTtlInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#idle_session_ttl_in_seconds Lexv2ModelsBot#idle_session_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#role_arn Lexv2ModelsBot#role_arn}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.dataPrivacy">DataPrivacy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>[]</code> | data_privacy block. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#description Lexv2ModelsBot#description}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.members">Members</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>[]</code> | members block. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#tags Lexv2ModelsBot#tags}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.testBotAliasTags">TestBotAliasTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#test_bot_alias_tags Lexv2ModelsBot#test_bot_alias_tags}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#type Lexv2ModelsBot#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdleSessionTtlInSeconds`<sup>Required</sup> <a name="IdleSessionTtlInSeconds" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.idleSessionTtlInSeconds"></a>

```csharp
public double IdleSessionTtlInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#idle_session_ttl_in_seconds Lexv2ModelsBot#idle_session_ttl_in_seconds}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#role_arn Lexv2ModelsBot#role_arn}.

---

##### `DataPrivacy`<sup>Optional</sup> <a name="DataPrivacy" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.dataPrivacy"></a>

```csharp
public IResolvable|Lexv2ModelsBotDataPrivacy[] DataPrivacy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>[]

data_privacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#data_privacy Lexv2ModelsBot#data_privacy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#description Lexv2ModelsBot#description}.

---

##### `Members`<sup>Optional</sup> <a name="Members" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.members"></a>

```csharp
public IResolvable|Lexv2ModelsBotMembers[] Members { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>[]

members block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#members Lexv2ModelsBot#members}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#region Lexv2ModelsBot#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#tags Lexv2ModelsBot#tags}.

---

##### `TestBotAliasTags`<sup>Optional</sup> <a name="TestBotAliasTags" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.testBotAliasTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TestBotAliasTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#test_bot_alias_tags Lexv2ModelsBot#test_bot_alias_tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.timeouts"></a>

```csharp
public Lexv2ModelsBotTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#timeouts Lexv2ModelsBot#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#type Lexv2ModelsBot#type}.

---

### Lexv2ModelsBotDataPrivacy <a name="Lexv2ModelsBotDataPrivacy" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Lexv2ModelsBotDataPrivacy {
    bool|IResolvable ChildDirected
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy.property.childDirected">ChildDirected</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#child_directed Lexv2ModelsBot#child_directed}. |

---

##### `ChildDirected`<sup>Required</sup> <a name="ChildDirected" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy.property.childDirected"></a>

```csharp
public bool|IResolvable ChildDirected { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#child_directed Lexv2ModelsBot#child_directed}.

---

### Lexv2ModelsBotMembers <a name="Lexv2ModelsBotMembers" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Lexv2ModelsBotMembers {
    string AliasId,
    string AliasName,
    string Id,
    string Name,
    string Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.aliasId">AliasId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#alias_id Lexv2ModelsBot#alias_id}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.aliasName">AliasName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#alias_name Lexv2ModelsBot#alias_name}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#id Lexv2ModelsBot#id}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#version Lexv2ModelsBot#version}. |

---

##### `AliasId`<sup>Required</sup> <a name="AliasId" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.aliasId"></a>

```csharp
public string AliasId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#alias_id Lexv2ModelsBot#alias_id}.

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.aliasName"></a>

```csharp
public string AliasName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#alias_name Lexv2ModelsBot#alias_name}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#id Lexv2ModelsBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#version Lexv2ModelsBot#version}.

---

### Lexv2ModelsBotTimeouts <a name="Lexv2ModelsBotTimeouts" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Lexv2ModelsBotTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#create Lexv2ModelsBot#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#delete Lexv2ModelsBot#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lexv2models_bot#update Lexv2ModelsBot#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Lexv2ModelsBotDataPrivacyList <a name="Lexv2ModelsBotDataPrivacyList" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Lexv2ModelsBotDataPrivacyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.get"></a>

```csharp
private Lexv2ModelsBotDataPrivacyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyList.property.internalValue"></a>

```csharp
public IResolvable|Lexv2ModelsBotDataPrivacy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>[]

---


### Lexv2ModelsBotDataPrivacyOutputReference <a name="Lexv2ModelsBotDataPrivacyOutputReference" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Lexv2ModelsBotDataPrivacyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.childDirectedInput">ChildDirectedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.childDirected">ChildDirected</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChildDirectedInput`<sup>Optional</sup> <a name="ChildDirectedInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.childDirectedInput"></a>

```csharp
public bool|IResolvable ChildDirectedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ChildDirected`<sup>Required</sup> <a name="ChildDirected" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.childDirected"></a>

```csharp
public bool|IResolvable ChildDirected { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Lexv2ModelsBotDataPrivacy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotDataPrivacy">Lexv2ModelsBotDataPrivacy</a>

---


### Lexv2ModelsBotMembersList <a name="Lexv2ModelsBotMembersList" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Lexv2ModelsBotMembersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.get"></a>

```csharp
private Lexv2ModelsBotMembersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersList.property.internalValue"></a>

```csharp
public IResolvable|Lexv2ModelsBotMembers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>[]

---


### Lexv2ModelsBotMembersOutputReference <a name="Lexv2ModelsBotMembersOutputReference" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Lexv2ModelsBotMembersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasIdInput">AliasIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasNameInput">AliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasId">AliasId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasName">AliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasIdInput`<sup>Optional</sup> <a name="AliasIdInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasIdInput"></a>

```csharp
public string AliasIdInput { get; }
```

- *Type:* string

---

##### `AliasNameInput`<sup>Optional</sup> <a name="AliasNameInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasNameInput"></a>

```csharp
public string AliasNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `AliasId`<sup>Required</sup> <a name="AliasId" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasId"></a>

```csharp
public string AliasId { get; }
```

- *Type:* string

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.aliasName"></a>

```csharp
public string AliasName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Lexv2ModelsBotMembers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotMembers">Lexv2ModelsBotMembers</a>

---


### Lexv2ModelsBotTimeoutsOutputReference <a name="Lexv2ModelsBotTimeoutsOutputReference" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Lexv2ModelsBotTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Lexv2ModelsBotTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lexv2ModelsBot.Lexv2ModelsBotTimeouts">Lexv2ModelsBotTimeouts</a>

---



