# `workspaceswebBrowserSettings` Submodule <a name="`workspaceswebBrowserSettings` Submodule" id="@cdktn/provider-aws.workspaceswebBrowserSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebBrowserSettings <a name="WorkspaceswebBrowserSettings" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspacesweb_browser_settings aws_workspacesweb_browser_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WorkspaceswebBrowserSettings(Construct Scope, string Id, WorkspaceswebBrowserSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig">WorkspaceswebBrowserSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig">WorkspaceswebBrowserSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetAdditionalEncryptionContext">ResetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAdditionalEncryptionContext` <a name="ResetAdditionalEncryptionContext" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetAdditionalEncryptionContext"></a>

```csharp
private void ResetAdditionalEncryptionContext()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetCustomerManagedKey"></a>

```csharp
private void ResetCustomerManagedKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceswebBrowserSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkspaceswebBrowserSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkspaceswebBrowserSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkspaceswebBrowserSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkspaceswebBrowserSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WorkspaceswebBrowserSettings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceswebBrowserSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceswebBrowserSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspacesweb_browser_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebBrowserSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.associatedPortalArns">AssociatedPortalArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserSettingsArn">BrowserSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContextInput">AdditionalEncryptionContextInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicyInput">BrowserPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicy">BrowserPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKey">CustomerManagedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociatedPortalArns`<sup>Required</sup> <a name="AssociatedPortalArns" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.associatedPortalArns"></a>

```csharp
public string[] AssociatedPortalArns { get; }
```

- *Type:* string[]

---

##### `BrowserSettingsArn`<sup>Required</sup> <a name="BrowserSettingsArn" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserSettingsArn"></a>

```csharp
public string BrowserSettingsArn { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `AdditionalEncryptionContextInput`<sup>Optional</sup> <a name="AdditionalEncryptionContextInput" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContextInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContextInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BrowserPolicyInput`<sup>Optional</sup> <a name="BrowserPolicyInput" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicyInput"></a>

```csharp
public string BrowserPolicyInput { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKeyInput"></a>

```csharp
public string CustomerManagedKeyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AdditionalEncryptionContext`<sup>Required</sup> <a name="AdditionalEncryptionContext" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContext"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContext { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BrowserPolicy`<sup>Required</sup> <a name="BrowserPolicy" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicy"></a>

```csharp
public string BrowserPolicy { get; }
```

- *Type:* string

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKey"></a>

```csharp
public string CustomerManagedKey { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebBrowserSettingsConfig <a name="WorkspaceswebBrowserSettingsConfig" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WorkspaceswebBrowserSettingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BrowserPolicy,
    System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContext = null,
    string CustomerManagedKey = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.browserPolicy">BrowserPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspacesweb_browser_settings#browser_policy WorkspaceswebBrowserSettings#browser_policy}. |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspacesweb_browser_settings#additional_encryption_context WorkspaceswebBrowserSettings#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspacesweb_browser_settings#customer_managed_key WorkspaceswebBrowserSettings#customer_managed_key}. |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspacesweb_browser_settings#tags WorkspaceswebBrowserSettings#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BrowserPolicy`<sup>Required</sup> <a name="BrowserPolicy" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.browserPolicy"></a>

```csharp
public string BrowserPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspacesweb_browser_settings#browser_policy WorkspaceswebBrowserSettings#browser_policy}.

---

##### `AdditionalEncryptionContext`<sup>Optional</sup> <a name="AdditionalEncryptionContext" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.additionalEncryptionContext"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContext { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspacesweb_browser_settings#additional_encryption_context WorkspaceswebBrowserSettings#additional_encryption_context}.

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.customerManagedKey"></a>

```csharp
public string CustomerManagedKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspacesweb_browser_settings#customer_managed_key WorkspaceswebBrowserSettings#customer_managed_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspacesweb_browser_settings#region WorkspaceswebBrowserSettings#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspacesweb_browser_settings#tags WorkspaceswebBrowserSettings#tags}.

---



