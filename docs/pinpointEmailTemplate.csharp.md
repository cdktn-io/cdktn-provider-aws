# `pinpointEmailTemplate` Submodule <a name="`pinpointEmailTemplate` Submodule" id="@cdktn/provider-aws.pinpointEmailTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointEmailTemplate <a name="PinpointEmailTemplate" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template aws_pinpoint_email_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PinpointEmailTemplate(Construct Scope, string Id, PinpointEmailTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig">PinpointEmailTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig">PinpointEmailTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.putEmailTemplate">PutEmailTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetEmailTemplate">ResetEmailTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEmailTemplate` <a name="PutEmailTemplate" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.putEmailTemplate"></a>

```csharp
private void PutEmailTemplate(IResolvable|PinpointEmailTemplateEmailTemplate[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.putEmailTemplate.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>[]

---

##### `ResetEmailTemplate` <a name="ResetEmailTemplate" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetEmailTemplate"></a>

```csharp
private void ResetEmailTemplate()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PinpointEmailTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PinpointEmailTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PinpointEmailTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PinpointEmailTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PinpointEmailTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PinpointEmailTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PinpointEmailTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PinpointEmailTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PinpointEmailTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.emailTemplate">EmailTemplate</a></code> | <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList">PinpointEmailTemplateEmailTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.emailTemplateInput">EmailTemplateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.templateNameInput">TemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EmailTemplate`<sup>Required</sup> <a name="EmailTemplate" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.emailTemplate"></a>

```csharp
public PinpointEmailTemplateEmailTemplateList EmailTemplate { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList">PinpointEmailTemplateEmailTemplateList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EmailTemplateInput`<sup>Optional</sup> <a name="EmailTemplateInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.emailTemplateInput"></a>

```csharp
public IResolvable|PinpointEmailTemplateEmailTemplate[] EmailTemplateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.templateNameInput"></a>

```csharp
public string TemplateNameInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointEmailTemplateConfig <a name="PinpointEmailTemplateConfig" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PinpointEmailTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string TemplateName,
    IResolvable|PinpointEmailTemplateEmailTemplate[] EmailTemplate = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.templateName">TemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#template_name PinpointEmailTemplate#template_name}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.emailTemplate">EmailTemplate</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>[]</code> | email_template block. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#tags PinpointEmailTemplate#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.templateName"></a>

```csharp
public string TemplateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#template_name PinpointEmailTemplate#template_name}.

---

##### `EmailTemplate`<sup>Optional</sup> <a name="EmailTemplate" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.emailTemplate"></a>

```csharp
public IResolvable|PinpointEmailTemplateEmailTemplate[] EmailTemplate { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>[]

email_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#email_template PinpointEmailTemplate#email_template}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#region PinpointEmailTemplate#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#tags PinpointEmailTemplate#tags}.

---

### PinpointEmailTemplateEmailTemplate <a name="PinpointEmailTemplateEmailTemplate" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PinpointEmailTemplateEmailTemplate {
    string DefaultSubstitutions = null,
    string Description = null,
    IResolvable|PinpointEmailTemplateEmailTemplateHeader[] Header = null,
    string HtmlPart = null,
    string RecommenderId = null,
    string Subject = null,
    string TextPart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.defaultSubstitutions">DefaultSubstitutions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#default_substitutions PinpointEmailTemplate#default_substitutions}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#description PinpointEmailTemplate#description}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.header">Header</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>[]</code> | header block. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.htmlPart">HtmlPart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#html_part PinpointEmailTemplate#html_part}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.recommenderId">RecommenderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#recommender_id PinpointEmailTemplate#recommender_id}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#subject PinpointEmailTemplate#subject}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.textPart">TextPart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#text_part PinpointEmailTemplate#text_part}. |

---

##### `DefaultSubstitutions`<sup>Optional</sup> <a name="DefaultSubstitutions" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.defaultSubstitutions"></a>

```csharp
public string DefaultSubstitutions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#default_substitutions PinpointEmailTemplate#default_substitutions}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#description PinpointEmailTemplate#description}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.header"></a>

```csharp
public IResolvable|PinpointEmailTemplateEmailTemplateHeader[] Header { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#header PinpointEmailTemplate#header}

---

##### `HtmlPart`<sup>Optional</sup> <a name="HtmlPart" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.htmlPart"></a>

```csharp
public string HtmlPart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#html_part PinpointEmailTemplate#html_part}.

---

##### `RecommenderId`<sup>Optional</sup> <a name="RecommenderId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.recommenderId"></a>

```csharp
public string RecommenderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#recommender_id PinpointEmailTemplate#recommender_id}.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#subject PinpointEmailTemplate#subject}.

---

##### `TextPart`<sup>Optional</sup> <a name="TextPart" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.textPart"></a>

```csharp
public string TextPart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#text_part PinpointEmailTemplate#text_part}.

---

### PinpointEmailTemplateEmailTemplateHeader <a name="PinpointEmailTemplateEmailTemplateHeader" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PinpointEmailTemplateEmailTemplateHeader {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#name PinpointEmailTemplate#name}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#value PinpointEmailTemplate#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#name PinpointEmailTemplate#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpoint_email_template#value PinpointEmailTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PinpointEmailTemplateEmailTemplateHeaderList <a name="PinpointEmailTemplateEmailTemplateHeaderList" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PinpointEmailTemplateEmailTemplateHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.get"></a>

```csharp
private PinpointEmailTemplateEmailTemplateHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.internalValue"></a>

```csharp
public IResolvable|PinpointEmailTemplateEmailTemplateHeader[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>[]

---


### PinpointEmailTemplateEmailTemplateHeaderOutputReference <a name="PinpointEmailTemplateEmailTemplateHeaderOutputReference" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PinpointEmailTemplateEmailTemplateHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PinpointEmailTemplateEmailTemplateHeader InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>

---


### PinpointEmailTemplateEmailTemplateList <a name="PinpointEmailTemplateEmailTemplateList" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PinpointEmailTemplateEmailTemplateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.get"></a>

```csharp
private PinpointEmailTemplateEmailTemplateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.internalValue"></a>

```csharp
public IResolvable|PinpointEmailTemplateEmailTemplate[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>[]

---


### PinpointEmailTemplateEmailTemplateOutputReference <a name="PinpointEmailTemplateEmailTemplateOutputReference" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PinpointEmailTemplateEmailTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetDefaultSubstitutions">ResetDefaultSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetHtmlPart">ResetHtmlPart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetRecommenderId">ResetRecommenderId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetTextPart">ResetTextPart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.putHeader"></a>

```csharp
private void PutHeader(IResolvable|PinpointEmailTemplateEmailTemplateHeader[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.putHeader.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>[]

---

##### `ResetDefaultSubstitutions` <a name="ResetDefaultSubstitutions" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetDefaultSubstitutions"></a>

```csharp
private void ResetDefaultSubstitutions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetHtmlPart` <a name="ResetHtmlPart" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetHtmlPart"></a>

```csharp
private void ResetHtmlPart()
```

##### `ResetRecommenderId` <a name="ResetRecommenderId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetRecommenderId"></a>

```csharp
private void ResetRecommenderId()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```

##### `ResetTextPart` <a name="ResetTextPart" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetTextPart"></a>

```csharp
private void ResetTextPart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.header">Header</a></code> | <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList">PinpointEmailTemplateEmailTemplateHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.defaultSubstitutionsInput">DefaultSubstitutionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.headerInput">HeaderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.htmlPartInput">HtmlPartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.recommenderIdInput">RecommenderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.textPartInput">TextPartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.defaultSubstitutions">DefaultSubstitutions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.htmlPart">HtmlPart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.recommenderId">RecommenderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.textPart">TextPart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.header"></a>

```csharp
public PinpointEmailTemplateEmailTemplateHeaderList Header { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList">PinpointEmailTemplateEmailTemplateHeaderList</a>

---

##### `DefaultSubstitutionsInput`<sup>Optional</sup> <a name="DefaultSubstitutionsInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.defaultSubstitutionsInput"></a>

```csharp
public string DefaultSubstitutionsInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.headerInput"></a>

```csharp
public IResolvable|PinpointEmailTemplateEmailTemplateHeader[] HeaderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>[]

---

##### `HtmlPartInput`<sup>Optional</sup> <a name="HtmlPartInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.htmlPartInput"></a>

```csharp
public string HtmlPartInput { get; }
```

- *Type:* string

---

##### `RecommenderIdInput`<sup>Optional</sup> <a name="RecommenderIdInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.recommenderIdInput"></a>

```csharp
public string RecommenderIdInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `TextPartInput`<sup>Optional</sup> <a name="TextPartInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.textPartInput"></a>

```csharp
public string TextPartInput { get; }
```

- *Type:* string

---

##### `DefaultSubstitutions`<sup>Required</sup> <a name="DefaultSubstitutions" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.defaultSubstitutions"></a>

```csharp
public string DefaultSubstitutions { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HtmlPart`<sup>Required</sup> <a name="HtmlPart" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.htmlPart"></a>

```csharp
public string HtmlPart { get; }
```

- *Type:* string

---

##### `RecommenderId`<sup>Required</sup> <a name="RecommenderId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.recommenderId"></a>

```csharp
public string RecommenderId { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `TextPart`<sup>Required</sup> <a name="TextPart" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.textPart"></a>

```csharp
public string TextPart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PinpointEmailTemplateEmailTemplate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>

---



