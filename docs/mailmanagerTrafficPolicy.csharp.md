# `mailmanagerTrafficPolicy` Submodule <a name="`mailmanagerTrafficPolicy` Submodule" id="@cdktn/provider-aws.mailmanagerTrafficPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MailmanagerTrafficPolicy <a name="MailmanagerTrafficPolicy" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy aws_mailmanager_traffic_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicy(Construct Scope, string Id, MailmanagerTrafficPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig">MailmanagerTrafficPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig">MailmanagerTrafficPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.putPolicyStatement">PutPolicyStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetMaxMessageSizeBytes">ResetMaxMessageSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetPolicyStatement">ResetPolicyStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicyStatement` <a name="PutPolicyStatement" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.putPolicyStatement"></a>

```csharp
private void PutPolicyStatement(IResolvable|MailmanagerTrafficPolicyPolicyStatement[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.putPolicyStatement.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>[]

---

##### `ResetMaxMessageSizeBytes` <a name="ResetMaxMessageSizeBytes" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetMaxMessageSizeBytes"></a>

```csharp
private void ResetMaxMessageSizeBytes()
```

##### `ResetPolicyStatement` <a name="ResetPolicyStatement" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetPolicyStatement"></a>

```csharp
private void ResetPolicyStatement()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MailmanagerTrafficPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MailmanagerTrafficPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MailmanagerTrafficPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MailmanagerTrafficPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MailmanagerTrafficPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MailmanagerTrafficPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MailmanagerTrafficPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MailmanagerTrafficPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MailmanagerTrafficPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.policyStatement">PolicyStatement</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList">MailmanagerTrafficPolicyPolicyStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.defaultActionInput">DefaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.maxMessageSizeBytesInput">MaxMessageSizeBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.policyStatementInput">PolicyStatementInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.maxMessageSizeBytes">MaxMessageSizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.lastUpdatedTimestamp"></a>

```csharp
public string LastUpdatedTimestamp { get; }
```

- *Type:* string

---

##### `PolicyStatement`<sup>Required</sup> <a name="PolicyStatement" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.policyStatement"></a>

```csharp
public MailmanagerTrafficPolicyPolicyStatementList PolicyStatement { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList">MailmanagerTrafficPolicyPolicyStatementList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.defaultActionInput"></a>

```csharp
public string DefaultActionInput { get; }
```

- *Type:* string

---

##### `MaxMessageSizeBytesInput`<sup>Optional</sup> <a name="MaxMessageSizeBytesInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.maxMessageSizeBytesInput"></a>

```csharp
public double MaxMessageSizeBytesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyStatementInput`<sup>Optional</sup> <a name="PolicyStatementInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.policyStatementInput"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatement[] PolicyStatementInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `MaxMessageSizeBytes`<sup>Required</sup> <a name="MaxMessageSizeBytes" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.maxMessageSizeBytes"></a>

```csharp
public double MaxMessageSizeBytes { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MailmanagerTrafficPolicyConfig <a name="MailmanagerTrafficPolicyConfig" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DefaultAction,
    string Name,
    double MaxMessageSizeBytes = null,
    IResolvable|MailmanagerTrafficPolicyPolicyStatement[] PolicyStatement = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.defaultAction">DefaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#default_action MailmanagerTrafficPolicy#default_action}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#name MailmanagerTrafficPolicy#name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.maxMessageSizeBytes">MaxMessageSizeBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#max_message_size_bytes MailmanagerTrafficPolicy#max_message_size_bytes}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.policyStatement">PolicyStatement</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>[]</code> | policy_statement block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#tags MailmanagerTrafficPolicy#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.defaultAction"></a>

```csharp
public string DefaultAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#default_action MailmanagerTrafficPolicy#default_action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#name MailmanagerTrafficPolicy#name}.

---

##### `MaxMessageSizeBytes`<sup>Optional</sup> <a name="MaxMessageSizeBytes" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.maxMessageSizeBytes"></a>

```csharp
public double MaxMessageSizeBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#max_message_size_bytes MailmanagerTrafficPolicy#max_message_size_bytes}.

---

##### `PolicyStatement`<sup>Optional</sup> <a name="PolicyStatement" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.policyStatement"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatement[] PolicyStatement { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>[]

policy_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#policy_statement MailmanagerTrafficPolicy#policy_statement}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#region MailmanagerTrafficPolicy#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#tags MailmanagerTrafficPolicy#tags}.

---

### MailmanagerTrafficPolicyPolicyStatement <a name="MailmanagerTrafficPolicyPolicyStatement" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatement {
    string Action,
    IResolvable|MailmanagerTrafficPolicyPolicyStatementCondition[] Condition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#action MailmanagerTrafficPolicy#action}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement.property.condition">Condition</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>[]</code> | condition block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#action MailmanagerTrafficPolicy#action}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement.property.condition"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementCondition[] Condition { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#condition MailmanagerTrafficPolicy#condition}

---

### MailmanagerTrafficPolicyPolicyStatementCondition <a name="MailmanagerTrafficPolicyPolicyStatementCondition" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementCondition {
    IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression[] BooleanExpression = null,
    IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpExpression[] IpExpression = null,
    IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression[] Ipv6Expression = null,
    IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpression[] StringExpression = null,
    IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression[] TlsExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.booleanExpression">BooleanExpression</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>[]</code> | boolean_expression block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.ipExpression">IpExpression</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>[]</code> | ip_expression block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.ipv6Expression">Ipv6Expression</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>[]</code> | ipv6_expression block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.stringExpression">StringExpression</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>[]</code> | string_expression block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.tlsExpression">TlsExpression</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>[]</code> | tls_expression block. |

---

##### `BooleanExpression`<sup>Optional</sup> <a name="BooleanExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.booleanExpression"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression[] BooleanExpression { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>[]

boolean_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#boolean_expression MailmanagerTrafficPolicy#boolean_expression}

---

##### `IpExpression`<sup>Optional</sup> <a name="IpExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.ipExpression"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpExpression[] IpExpression { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>[]

ip_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#ip_expression MailmanagerTrafficPolicy#ip_expression}

---

##### `Ipv6Expression`<sup>Optional</sup> <a name="Ipv6Expression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.ipv6Expression"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression[] Ipv6Expression { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>[]

ipv6_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#ipv6_expression MailmanagerTrafficPolicy#ipv6_expression}

---

##### `StringExpression`<sup>Optional</sup> <a name="StringExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.stringExpression"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpression[] StringExpression { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>[]

string_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#string_expression MailmanagerTrafficPolicy#string_expression}

---

##### `TlsExpression`<sup>Optional</sup> <a name="TlsExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.tlsExpression"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression[] TlsExpression { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>[]

tls_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#tls_expression MailmanagerTrafficPolicy#tls_expression}

---

### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression {
    string Operator,
    IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate[] Evaluate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression.property.evaluate">Evaluate</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>[]</code> | evaluate block. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}.

---

##### `Evaluate`<sup>Optional</sup> <a name="Evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression.property.evaluate"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate[] Evaluate { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>[]

evaluate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#evaluate MailmanagerTrafficPolicy#evaluate}

---

### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate {
    IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis[] Analysis = null,
    IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct[] IsInAddressList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate.property.analysis">Analysis</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>[]</code> | analysis block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate.property.isInAddressList">IsInAddressList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>[]</code> | is_in_address_list block. |

---

##### `Analysis`<sup>Optional</sup> <a name="Analysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate.property.analysis"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis[] Analysis { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>[]

analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#analysis MailmanagerTrafficPolicy#analysis}

---

##### `IsInAddressList`<sup>Optional</sup> <a name="IsInAddressList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate.property.isInAddressList"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct[] IsInAddressList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>[]

is_in_address_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#is_in_address_list MailmanagerTrafficPolicy#is_in_address_list}

---

### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis {
    string Analyzer,
    string ResultField
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis.property.analyzer">Analyzer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#analyzer MailmanagerTrafficPolicy#analyzer}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis.property.resultField">ResultField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#result_field MailmanagerTrafficPolicy#result_field}. |

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis.property.analyzer"></a>

```csharp
public string Analyzer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#analyzer MailmanagerTrafficPolicy#analyzer}.

---

##### `ResultField`<sup>Required</sup> <a name="ResultField" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis.property.resultField"></a>

```csharp
public string ResultField { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#result_field MailmanagerTrafficPolicy#result_field}.

---

### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct {
    string[] AddressLists,
    string Attribute
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct.property.addressLists">AddressLists</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#address_lists MailmanagerTrafficPolicy#address_lists}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}. |

---

##### `AddressLists`<sup>Required</sup> <a name="AddressLists" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct.property.addressLists"></a>

```csharp
public string[] AddressLists { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#address_lists MailmanagerTrafficPolicy#address_lists}.

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}.

---

### MailmanagerTrafficPolicyPolicyStatementConditionIpExpression <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionIpExpression {
    string Operator,
    string[] Values,
    IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate[] Evaluate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#values MailmanagerTrafficPolicy#values}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression.property.evaluate">Evaluate</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>[]</code> | evaluate block. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#values MailmanagerTrafficPolicy#values}.

---

##### `Evaluate`<sup>Optional</sup> <a name="Evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression.property.evaluate"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate[] Evaluate { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>[]

evaluate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#evaluate MailmanagerTrafficPolicy#evaluate}

---

### MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate {
    string Attribute
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}.

---

### MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression {
    string Operator,
    string[] Values,
    IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate[] Evaluate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#values MailmanagerTrafficPolicy#values}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression.property.evaluate">Evaluate</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>[]</code> | evaluate block. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#values MailmanagerTrafficPolicy#values}.

---

##### `Evaluate`<sup>Optional</sup> <a name="Evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression.property.evaluate"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate[] Evaluate { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>[]

evaluate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#evaluate MailmanagerTrafficPolicy#evaluate}

---

### MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate {
    string Attribute
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}.

---

### MailmanagerTrafficPolicyPolicyStatementConditionStringExpression <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionStringExpression {
    string Operator,
    string[] Values,
    IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate[] Evaluate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#values MailmanagerTrafficPolicy#values}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression.property.evaluate">Evaluate</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>[]</code> | evaluate block. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#values MailmanagerTrafficPolicy#values}.

---

##### `Evaluate`<sup>Optional</sup> <a name="Evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression.property.evaluate"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate[] Evaluate { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>[]

evaluate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#evaluate MailmanagerTrafficPolicy#evaluate}

---

### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate {
    IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis[] Analysis = null,
    string Attribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate.property.analysis">Analysis</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>[]</code> | analysis block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}. |

---

##### `Analysis`<sup>Optional</sup> <a name="Analysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate.property.analysis"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis[] Analysis { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>[]

analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#analysis MailmanagerTrafficPolicy#analysis}

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}.

---

### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis {
    string Analyzer,
    string ResultField
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis.property.analyzer">Analyzer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#analyzer MailmanagerTrafficPolicy#analyzer}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis.property.resultField">ResultField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#result_field MailmanagerTrafficPolicy#result_field}. |

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis.property.analyzer"></a>

```csharp
public string Analyzer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#analyzer MailmanagerTrafficPolicy#analyzer}.

---

##### `ResultField`<sup>Required</sup> <a name="ResultField" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis.property.resultField"></a>

```csharp
public string ResultField { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#result_field MailmanagerTrafficPolicy#result_field}.

---

### MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression <a name="MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression {
    string Operator,
    string Value,
    IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate[] Evaluate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#value MailmanagerTrafficPolicy#value}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression.property.evaluate">Evaluate</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>[]</code> | evaluate block. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#value MailmanagerTrafficPolicy#value}.

---

##### `Evaluate`<sup>Optional</sup> <a name="Evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression.property.evaluate"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate[] Evaluate { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>[]

evaluate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#evaluate MailmanagerTrafficPolicy#evaluate}

---

### MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate <a name="MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate {
    string Attribute
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}.

---

## Classes <a name="Classes" id="Classes"></a>

### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.get"></a>

```csharp
private MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>[]

---


### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.analyzerInput">AnalyzerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.resultFieldInput">ResultFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer">Analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.resultField">ResultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnalyzerInput`<sup>Optional</sup> <a name="AnalyzerInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.analyzerInput"></a>

```csharp
public string AnalyzerInput { get; }
```

- *Type:* string

---

##### `ResultFieldInput`<sup>Optional</sup> <a name="ResultFieldInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.resultFieldInput"></a>

```csharp
public string ResultFieldInput { get; }
```

- *Type:* string

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```csharp
public string Analyzer { get; }
```

- *Type:* string

---

##### `ResultField`<sup>Required</sup> <a name="ResultField" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```csharp
public string ResultField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.get"></a>

```csharp
private MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>[]

---


### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressListsInput">AddressListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists">AddressLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressListsInput`<sup>Optional</sup> <a name="AddressListsInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressListsInput"></a>

```csharp
public string[] AddressListsInput { get; }
```

- *Type:* string[]

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `AddressLists`<sup>Required</sup> <a name="AddressLists" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists"></a>

```csharp
public string[] AddressLists { get; }
```

- *Type:* string[]

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.get"></a>

```csharp
private MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>[]

---


### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.putAnalysis">PutAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.putIsInAddressList">PutIsInAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.resetAnalysis">ResetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.resetIsInAddressList">ResetIsInAddressList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnalysis` <a name="PutAnalysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.putAnalysis"></a>

```csharp
private void PutAnalysis(IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.putAnalysis.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>[]

---

##### `PutIsInAddressList` <a name="PutIsInAddressList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.putIsInAddressList"></a>

```csharp
private void PutIsInAddressList(IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.putIsInAddressList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>[]

---

##### `ResetAnalysis` <a name="ResetAnalysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.resetAnalysis"></a>

```csharp
private void ResetAnalysis()
```

##### `ResetIsInAddressList` <a name="ResetIsInAddressList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.resetIsInAddressList"></a>

```csharp
private void ResetIsInAddressList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.isInAddressList">IsInAddressList</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.analysisInput">AnalysisInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.isInAddressListInput">IsInAddressListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.analysis"></a>

```csharp
public MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList Analysis { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList</a>

---

##### `IsInAddressList`<sup>Required</sup> <a name="IsInAddressList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.isInAddressList"></a>

```csharp
public MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList IsInAddressList { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList</a>

---

##### `AnalysisInput`<sup>Optional</sup> <a name="AnalysisInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.analysisInput"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis[] AnalysisInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>[]

---

##### `IsInAddressListInput`<sup>Optional</sup> <a name="IsInAddressListInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.isInAddressListInput"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct[] IsInAddressListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.get"></a>

```csharp
private MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>[]

---


### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.putEvaluate">PutEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.resetEvaluate">ResetEvaluate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvaluate` <a name="PutEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.putEvaluate"></a>

```csharp
private void PutEvaluate(IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>[]

---

##### `ResetEvaluate` <a name="ResetEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.resetEvaluate"></a>

```csharp
private void ResetEvaluate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.evaluateInput">EvaluateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.evaluate"></a>

```csharp
public MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList</a>

---

##### `EvaluateInput`<sup>Optional</sup> <a name="EvaluateInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.evaluateInput"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate[] EvaluateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>[]

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.get"></a>

```csharp
private MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>[]

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.get"></a>

```csharp
private MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpExpression[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>[]

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.putEvaluate">PutEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.resetEvaluate">ResetEvaluate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvaluate` <a name="PutEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.putEvaluate"></a>

```csharp
private void PutEvaluate(IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>[]

---

##### `ResetEvaluate` <a name="ResetEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.resetEvaluate"></a>

```csharp
private void ResetEvaluate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.evaluateInput">EvaluateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.evaluate"></a>

```csharp
public MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList</a>

---

##### `EvaluateInput`<sup>Optional</sup> <a name="EvaluateInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.evaluateInput"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate[] EvaluateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>[]

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpExpression InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.get"></a>

```csharp
private MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>[]

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.get"></a>

```csharp
private MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>[]

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.putEvaluate">PutEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.resetEvaluate">ResetEvaluate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvaluate` <a name="PutEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.putEvaluate"></a>

```csharp
private void PutEvaluate(IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>[]

---

##### `ResetEvaluate` <a name="ResetEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.resetEvaluate"></a>

```csharp
private void ResetEvaluate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.evaluateInput">EvaluateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.evaluate"></a>

```csharp
public MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList</a>

---

##### `EvaluateInput`<sup>Optional</sup> <a name="EvaluateInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.evaluateInput"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate[] EvaluateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>[]

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionList <a name="MailmanagerTrafficPolicyPolicyStatementConditionList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.get"></a>

```csharp
private MailmanagerTrafficPolicyPolicyStatementConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementCondition[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>[]

---


### MailmanagerTrafficPolicyPolicyStatementConditionOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putBooleanExpression">PutBooleanExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putIpExpression">PutIpExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putIpv6Expression">PutIpv6Expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putStringExpression">PutStringExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putTlsExpression">PutTlsExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetBooleanExpression">ResetBooleanExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetIpExpression">ResetIpExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetIpv6Expression">ResetIpv6Expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetStringExpression">ResetStringExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetTlsExpression">ResetTlsExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBooleanExpression` <a name="PutBooleanExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putBooleanExpression"></a>

```csharp
private void PutBooleanExpression(IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putBooleanExpression.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>[]

---

##### `PutIpExpression` <a name="PutIpExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putIpExpression"></a>

```csharp
private void PutIpExpression(IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpExpression[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putIpExpression.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>[]

---

##### `PutIpv6Expression` <a name="PutIpv6Expression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putIpv6Expression"></a>

```csharp
private void PutIpv6Expression(IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putIpv6Expression.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>[]

---

##### `PutStringExpression` <a name="PutStringExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putStringExpression"></a>

```csharp
private void PutStringExpression(IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpression[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putStringExpression.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>[]

---

##### `PutTlsExpression` <a name="PutTlsExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putTlsExpression"></a>

```csharp
private void PutTlsExpression(IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putTlsExpression.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>[]

---

##### `ResetBooleanExpression` <a name="ResetBooleanExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetBooleanExpression"></a>

```csharp
private void ResetBooleanExpression()
```

##### `ResetIpExpression` <a name="ResetIpExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetIpExpression"></a>

```csharp
private void ResetIpExpression()
```

##### `ResetIpv6Expression` <a name="ResetIpv6Expression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetIpv6Expression"></a>

```csharp
private void ResetIpv6Expression()
```

##### `ResetStringExpression` <a name="ResetStringExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetStringExpression"></a>

```csharp
private void ResetStringExpression()
```

##### `ResetTlsExpression` <a name="ResetTlsExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetTlsExpression"></a>

```csharp
private void ResetTlsExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.booleanExpression">BooleanExpression</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipExpression">IpExpression</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipv6Expression">Ipv6Expression</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.stringExpression">StringExpression</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.tlsExpression">TlsExpression</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.booleanExpressionInput">BooleanExpressionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipExpressionInput">IpExpressionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipv6ExpressionInput">Ipv6ExpressionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.stringExpressionInput">StringExpressionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.tlsExpressionInput">TlsExpressionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanExpression`<sup>Required</sup> <a name="BooleanExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.booleanExpression"></a>

```csharp
public MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList BooleanExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList</a>

---

##### `IpExpression`<sup>Required</sup> <a name="IpExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipExpression"></a>

```csharp
public MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList IpExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList</a>

---

##### `Ipv6Expression`<sup>Required</sup> <a name="Ipv6Expression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipv6Expression"></a>

```csharp
public MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList Ipv6Expression { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList</a>

---

##### `StringExpression`<sup>Required</sup> <a name="StringExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.stringExpression"></a>

```csharp
public MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList StringExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList</a>

---

##### `TlsExpression`<sup>Required</sup> <a name="TlsExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.tlsExpression"></a>

```csharp
public MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList TlsExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList</a>

---

##### `BooleanExpressionInput`<sup>Optional</sup> <a name="BooleanExpressionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.booleanExpressionInput"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression[] BooleanExpressionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>[]

---

##### `IpExpressionInput`<sup>Optional</sup> <a name="IpExpressionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipExpressionInput"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpExpression[] IpExpressionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>[]

---

##### `Ipv6ExpressionInput`<sup>Optional</sup> <a name="Ipv6ExpressionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipv6ExpressionInput"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression[] Ipv6ExpressionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>[]

---

##### `StringExpressionInput`<sup>Optional</sup> <a name="StringExpressionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.stringExpressionInput"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpression[] StringExpressionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>[]

---

##### `TlsExpressionInput`<sup>Optional</sup> <a name="TlsExpressionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.tlsExpressionInput"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression[] TlsExpressionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementCondition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.get"></a>

```csharp
private MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>[]

---


### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.analyzerInput">AnalyzerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.resultFieldInput">ResultFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.analyzer">Analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.resultField">ResultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnalyzerInput`<sup>Optional</sup> <a name="AnalyzerInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.analyzerInput"></a>

```csharp
public string AnalyzerInput { get; }
```

- *Type:* string

---

##### `ResultFieldInput`<sup>Optional</sup> <a name="ResultFieldInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.resultFieldInput"></a>

```csharp
public string ResultFieldInput { get; }
```

- *Type:* string

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```csharp
public string Analyzer { get; }
```

- *Type:* string

---

##### `ResultField`<sup>Required</sup> <a name="ResultField" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```csharp
public string ResultField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.get"></a>

```csharp
private MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>[]

---


### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.putAnalysis">PutAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.resetAnalysis">ResetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnalysis` <a name="PutAnalysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.putAnalysis"></a>

```csharp
private void PutAnalysis(IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.putAnalysis.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>[]

---

##### `ResetAnalysis` <a name="ResetAnalysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.resetAnalysis"></a>

```csharp
private void ResetAnalysis()
```

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.analysisInput">AnalysisInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.analysis"></a>

```csharp
public MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList Analysis { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList</a>

---

##### `AnalysisInput`<sup>Optional</sup> <a name="AnalysisInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.analysisInput"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis[] AnalysisInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>[]

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.get"></a>

```csharp
private MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpression[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>[]

---


### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.putEvaluate">PutEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.resetEvaluate">ResetEvaluate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvaluate` <a name="PutEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.putEvaluate"></a>

```csharp
private void PutEvaluate(IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>[]

---

##### `ResetEvaluate` <a name="ResetEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.resetEvaluate"></a>

```csharp
private void ResetEvaluate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.evaluateInput">EvaluateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.evaluate"></a>

```csharp
public MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList</a>

---

##### `EvaluateInput`<sup>Optional</sup> <a name="EvaluateInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.evaluateInput"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate[] EvaluateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>[]

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpression InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList <a name="MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.get"></a>

```csharp
private MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>[]

---


### MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList <a name="MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.get"></a>

```csharp
private MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>[]

---


### MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.putEvaluate">PutEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.resetEvaluate">ResetEvaluate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvaluate` <a name="PutEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.putEvaluate"></a>

```csharp
private void PutEvaluate(IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>[]

---

##### `ResetEvaluate` <a name="ResetEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.resetEvaluate"></a>

```csharp
private void ResetEvaluate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.evaluateInput">EvaluateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.evaluate"></a>

```csharp
public MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList</a>

---

##### `EvaluateInput`<sup>Optional</sup> <a name="EvaluateInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.evaluateInput"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate[] EvaluateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>[]

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>

---


### MailmanagerTrafficPolicyPolicyStatementList <a name="MailmanagerTrafficPolicyPolicyStatementList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.get"></a>

```csharp
private MailmanagerTrafficPolicyPolicyStatementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatement[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>[]

---


### MailmanagerTrafficPolicyPolicyStatementOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerTrafficPolicyPolicyStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.putCondition"></a>

```csharp
private void PutCondition(IResolvable|MailmanagerTrafficPolicyPolicyStatementCondition[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.putCondition.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>[]

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList">MailmanagerTrafficPolicyPolicyStatementConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.conditionInput">ConditionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.condition"></a>

```csharp
public MailmanagerTrafficPolicyPolicyStatementConditionList Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList">MailmanagerTrafficPolicyPolicyStatementConditionList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.conditionInput"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatementCondition[] ConditionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerTrafficPolicyPolicyStatement InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>

---



