# `auditmanagerFrameworkShare` Submodule <a name="`auditmanagerFrameworkShare` Submodule" id="@cdktn/provider-aws.auditmanagerFrameworkShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerFrameworkShare <a name="AuditmanagerFrameworkShare" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/auditmanager_framework_share aws_auditmanager_framework_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AuditmanagerFrameworkShare(Construct Scope, string Id, AuditmanagerFrameworkShareConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig">AuditmanagerFrameworkShareConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig">AuditmanagerFrameworkShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AuditmanagerFrameworkShare resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerFrameworkShare.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerFrameworkShare.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerFrameworkShare.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerFrameworkShare.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AuditmanagerFrameworkShare resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuditmanagerFrameworkShare to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuditmanagerFrameworkShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/auditmanager_framework_share#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AuditmanagerFrameworkShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationAccountInput">DestinationAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationRegionInput">DestinationRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.frameworkIdInput">FrameworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationAccount">DestinationAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationRegion">DestinationRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.frameworkId">FrameworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DestinationAccountInput`<sup>Optional</sup> <a name="DestinationAccountInput" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationAccountInput"></a>

```csharp
public string DestinationAccountInput { get; }
```

- *Type:* string

---

##### `DestinationRegionInput`<sup>Optional</sup> <a name="DestinationRegionInput" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationRegionInput"></a>

```csharp
public string DestinationRegionInput { get; }
```

- *Type:* string

---

##### `FrameworkIdInput`<sup>Optional</sup> <a name="FrameworkIdInput" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.frameworkIdInput"></a>

```csharp
public string FrameworkIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `DestinationAccount`<sup>Required</sup> <a name="DestinationAccount" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationAccount"></a>

```csharp
public string DestinationAccount { get; }
```

- *Type:* string

---

##### `DestinationRegion`<sup>Required</sup> <a name="DestinationRegion" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationRegion"></a>

```csharp
public string DestinationRegion { get; }
```

- *Type:* string

---

##### `FrameworkId`<sup>Required</sup> <a name="FrameworkId" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.frameworkId"></a>

```csharp
public string FrameworkId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerFrameworkShareConfig <a name="AuditmanagerFrameworkShareConfig" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AuditmanagerFrameworkShareConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DestinationAccount,
    string DestinationRegion,
    string FrameworkId,
    string Comment = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.destinationAccount">DestinationAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/auditmanager_framework_share#destination_account AuditmanagerFrameworkShare#destination_account}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.destinationRegion">DestinationRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/auditmanager_framework_share#destination_region AuditmanagerFrameworkShare#destination_region}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.frameworkId">FrameworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/auditmanager_framework_share#framework_id AuditmanagerFrameworkShare#framework_id}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/auditmanager_framework_share#comment AuditmanagerFrameworkShare#comment}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DestinationAccount`<sup>Required</sup> <a name="DestinationAccount" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.destinationAccount"></a>

```csharp
public string DestinationAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/auditmanager_framework_share#destination_account AuditmanagerFrameworkShare#destination_account}.

---

##### `DestinationRegion`<sup>Required</sup> <a name="DestinationRegion" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.destinationRegion"></a>

```csharp
public string DestinationRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/auditmanager_framework_share#destination_region AuditmanagerFrameworkShare#destination_region}.

---

##### `FrameworkId`<sup>Required</sup> <a name="FrameworkId" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.frameworkId"></a>

```csharp
public string FrameworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/auditmanager_framework_share#framework_id AuditmanagerFrameworkShare#framework_id}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/auditmanager_framework_share#comment AuditmanagerFrameworkShare#comment}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/auditmanager_framework_share#region AuditmanagerFrameworkShare#region}

---



