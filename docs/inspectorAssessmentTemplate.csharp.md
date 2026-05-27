# `inspectorAssessmentTemplate` Submodule <a name="`inspectorAssessmentTemplate` Submodule" id="@cdktn/provider-aws.inspectorAssessmentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InspectorAssessmentTemplate <a name="InspectorAssessmentTemplate" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template aws_inspector_assessment_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new InspectorAssessmentTemplate(Construct Scope, string Id, InspectorAssessmentTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig">InspectorAssessmentTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig">InspectorAssessmentTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putEventSubscription">PutEventSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetEventSubscription">ResetEventSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventSubscription` <a name="PutEventSubscription" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putEventSubscription"></a>

```csharp
private void PutEventSubscription(IResolvable|InspectorAssessmentTemplateEventSubscription[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putEventSubscription.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>[]

---

##### `ResetEventSubscription` <a name="ResetEventSubscription" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetEventSubscription"></a>

```csharp
private void ResetEventSubscription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a InspectorAssessmentTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

InspectorAssessmentTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

InspectorAssessmentTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

InspectorAssessmentTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

InspectorAssessmentTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a InspectorAssessmentTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InspectorAssessmentTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InspectorAssessmentTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the InspectorAssessmentTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.eventSubscription">EventSubscription</a></code> | <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList">InspectorAssessmentTemplateEventSubscriptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.eventSubscriptionInput">EventSubscriptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArnsInput">RulesPackageArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.targetArnInput">TargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArns">RulesPackageArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.targetArn">TargetArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EventSubscription`<sup>Required</sup> <a name="EventSubscription" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.eventSubscription"></a>

```csharp
public InspectorAssessmentTemplateEventSubscriptionList EventSubscription { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList">InspectorAssessmentTemplateEventSubscriptionList</a>

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `EventSubscriptionInput`<sup>Optional</sup> <a name="EventSubscriptionInput" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.eventSubscriptionInput"></a>

```csharp
public IResolvable|InspectorAssessmentTemplateEventSubscription[] EventSubscriptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RulesPackageArnsInput`<sup>Optional</sup> <a name="RulesPackageArnsInput" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArnsInput"></a>

```csharp
public string[] RulesPackageArnsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetArnInput`<sup>Optional</sup> <a name="TargetArnInput" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.targetArnInput"></a>

```csharp
public string TargetArnInput { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RulesPackageArns`<sup>Required</sup> <a name="RulesPackageArns" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArns"></a>

```csharp
public string[] RulesPackageArns { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.targetArn"></a>

```csharp
public string TargetArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InspectorAssessmentTemplateConfig <a name="InspectorAssessmentTemplateConfig" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new InspectorAssessmentTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double Duration,
    string Name,
    string[] RulesPackageArns,
    string TargetArn,
    IResolvable|InspectorAssessmentTemplateEventSubscription[] EventSubscription = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.duration">Duration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#duration InspectorAssessmentTemplate#duration}. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#name InspectorAssessmentTemplate#name}. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.rulesPackageArns">RulesPackageArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.targetArn">TargetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#target_arn InspectorAssessmentTemplate#target_arn}. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.eventSubscription">EventSubscription</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>[]</code> | event_subscription block. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#id InspectorAssessmentTemplate#id}. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#tags InspectorAssessmentTemplate#tags}. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#tags_all InspectorAssessmentTemplate#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#duration InspectorAssessmentTemplate#duration}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#name InspectorAssessmentTemplate#name}.

---

##### `RulesPackageArns`<sup>Required</sup> <a name="RulesPackageArns" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.rulesPackageArns"></a>

```csharp
public string[] RulesPackageArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}.

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.targetArn"></a>

```csharp
public string TargetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#target_arn InspectorAssessmentTemplate#target_arn}.

---

##### `EventSubscription`<sup>Optional</sup> <a name="EventSubscription" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.eventSubscription"></a>

```csharp
public IResolvable|InspectorAssessmentTemplateEventSubscription[] EventSubscription { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>[]

event_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#event_subscription InspectorAssessmentTemplate#event_subscription}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#id InspectorAssessmentTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#region InspectorAssessmentTemplate#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#tags InspectorAssessmentTemplate#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#tags_all InspectorAssessmentTemplate#tags_all}.

---

### InspectorAssessmentTemplateEventSubscription <a name="InspectorAssessmentTemplateEventSubscription" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new InspectorAssessmentTemplateEventSubscription {
    string Event,
    string TopicArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription.property.event">Event</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#event InspectorAssessmentTemplate#event}. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription.property.topicArn">TopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#topic_arn InspectorAssessmentTemplate#topic_arn}. |

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription.property.event"></a>

```csharp
public string Event { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#event InspectorAssessmentTemplate#event}.

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/inspector_assessment_template#topic_arn InspectorAssessmentTemplate#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### InspectorAssessmentTemplateEventSubscriptionList <a name="InspectorAssessmentTemplateEventSubscriptionList" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new InspectorAssessmentTemplateEventSubscriptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.get"></a>

```csharp
private InspectorAssessmentTemplateEventSubscriptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.internalValue"></a>

```csharp
public IResolvable|InspectorAssessmentTemplateEventSubscription[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>[]

---


### InspectorAssessmentTemplateEventSubscriptionOutputReference <a name="InspectorAssessmentTemplateEventSubscriptionOutputReference" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new InspectorAssessmentTemplateEventSubscriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.eventInput">EventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.event">Event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.eventInput"></a>

```csharp
public string EventInput { get; }
```

- *Type:* string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.event"></a>

```csharp
public string Event { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InspectorAssessmentTemplateEventSubscription InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>

---



