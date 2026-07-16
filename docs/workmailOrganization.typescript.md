# `workmailOrganization` Submodule <a name="`workmailOrganization` Submodule" id="@cdktn/provider-aws.workmailOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkmailOrganization <a name="WorkmailOrganization" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization aws_workmail_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer"></a>

```typescript
import { workmailOrganization } from '@cdktn/provider-aws'

new workmailOrganization.WorkmailOrganization(scope: Construct, id: string, config: WorkmailOrganizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig">WorkmailOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig">WorkmailOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDeleteDirectory">resetDeleteDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDeleteIdentityCenterApplication">resetDeleteIdentityCenterApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetInteroperabilityEnabled">resetInteroperabilityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.putTimeouts"></a>

```typescript
public putTimeouts(value: WorkmailOrganizationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a>

---

##### `resetDeleteDirectory` <a name="resetDeleteDirectory" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDeleteDirectory"></a>

```typescript
public resetDeleteDirectory(): void
```

##### `resetDeleteIdentityCenterApplication` <a name="resetDeleteIdentityCenterApplication" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDeleteIdentityCenterApplication"></a>

```typescript
public resetDeleteIdentityCenterApplication(): void
```

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDirectoryId"></a>

```typescript
public resetDirectoryId(): void
```

##### `resetInteroperabilityEnabled` <a name="resetInteroperabilityEnabled" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetInteroperabilityEnabled"></a>

```typescript
public resetInteroperabilityEnabled(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkmailOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isConstruct"></a>

```typescript
import { workmailOrganization } from '@cdktn/provider-aws'

workmailOrganization.WorkmailOrganization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformElement"></a>

```typescript
import { workmailOrganization } from '@cdktn/provider-aws'

workmailOrganization.WorkmailOrganization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformResource"></a>

```typescript
import { workmailOrganization } from '@cdktn/provider-aws'

workmailOrganization.WorkmailOrganization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport"></a>

```typescript
import { workmailOrganization } from '@cdktn/provider-aws'

workmailOrganization.WorkmailOrganization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkmailOrganization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkmailOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkmailOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkmailOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.completedDate">completedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.defaultMailDomain">defaultMailDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryType">directoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.migrationAdmin">migrationAdmin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference">WorkmailOrganizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteDirectoryInput">deleteDirectoryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteIdentityCenterApplicationInput">deleteIdentityCenterApplicationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.interoperabilityEnabledInput">interoperabilityEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationAliasInput">organizationAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteDirectory">deleteDirectory</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteIdentityCenterApplication">deleteIdentityCenterApplication</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.interoperabilityEnabled">interoperabilityEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationAlias">organizationAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `completedDate`<sup>Required</sup> <a name="completedDate" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.completedDate"></a>

```typescript
public readonly completedDate: string;
```

- *Type:* string

---

##### `defaultMailDomain`<sup>Required</sup> <a name="defaultMailDomain" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.defaultMailDomain"></a>

```typescript
public readonly defaultMailDomain: string;
```

- *Type:* string

---

##### `directoryType`<sup>Required</sup> <a name="directoryType" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryType"></a>

```typescript
public readonly directoryType: string;
```

- *Type:* string

---

##### `migrationAdmin`<sup>Required</sup> <a name="migrationAdmin" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.migrationAdmin"></a>

```typescript
public readonly migrationAdmin: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.timeouts"></a>

```typescript
public readonly timeouts: WorkmailOrganizationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference">WorkmailOrganizationTimeoutsOutputReference</a>

---

##### `deleteDirectoryInput`<sup>Optional</sup> <a name="deleteDirectoryInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteDirectoryInput"></a>

```typescript
public readonly deleteDirectoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deleteIdentityCenterApplicationInput`<sup>Optional</sup> <a name="deleteIdentityCenterApplicationInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteIdentityCenterApplicationInput"></a>

```typescript
public readonly deleteIdentityCenterApplicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `interoperabilityEnabledInput`<sup>Optional</sup> <a name="interoperabilityEnabledInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.interoperabilityEnabledInput"></a>

```typescript
public readonly interoperabilityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `organizationAliasInput`<sup>Optional</sup> <a name="organizationAliasInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationAliasInput"></a>

```typescript
public readonly organizationAliasInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WorkmailOrganizationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a>

---

##### `deleteDirectory`<sup>Required</sup> <a name="deleteDirectory" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteDirectory"></a>

```typescript
public readonly deleteDirectory: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deleteIdentityCenterApplication`<sup>Required</sup> <a name="deleteIdentityCenterApplication" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteIdentityCenterApplication"></a>

```typescript
public readonly deleteIdentityCenterApplication: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `interoperabilityEnabled`<sup>Required</sup> <a name="interoperabilityEnabled" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.interoperabilityEnabled"></a>

```typescript
public readonly interoperabilityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `organizationAlias`<sup>Required</sup> <a name="organizationAlias" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationAlias"></a>

```typescript
public readonly organizationAlias: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkmailOrganizationConfig <a name="WorkmailOrganizationConfig" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.Initializer"></a>

```typescript
import { workmailOrganization } from '@cdktn/provider-aws'

const workmailOrganizationConfig: workmailOrganization.WorkmailOrganizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.organizationAlias">organizationAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#organization_alias WorkmailOrganization#organization_alias}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.deleteDirectory">deleteDirectory</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#delete_directory WorkmailOrganization#delete_directory}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.deleteIdentityCenterApplication">deleteIdentityCenterApplication</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#delete_identity_center_application WorkmailOrganization#delete_identity_center_application}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#directory_id WorkmailOrganization#directory_id}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.interoperabilityEnabled">interoperabilityEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#interoperability_enabled WorkmailOrganization#interoperability_enabled}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#kms_key_arn WorkmailOrganization#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#tags WorkmailOrganization#tags}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `organizationAlias`<sup>Required</sup> <a name="organizationAlias" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.organizationAlias"></a>

```typescript
public readonly organizationAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#organization_alias WorkmailOrganization#organization_alias}.

---

##### `deleteDirectory`<sup>Optional</sup> <a name="deleteDirectory" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.deleteDirectory"></a>

```typescript
public readonly deleteDirectory: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#delete_directory WorkmailOrganization#delete_directory}.

---

##### `deleteIdentityCenterApplication`<sup>Optional</sup> <a name="deleteIdentityCenterApplication" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.deleteIdentityCenterApplication"></a>

```typescript
public readonly deleteIdentityCenterApplication: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#delete_identity_center_application WorkmailOrganization#delete_identity_center_application}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#directory_id WorkmailOrganization#directory_id}.

---

##### `interoperabilityEnabled`<sup>Optional</sup> <a name="interoperabilityEnabled" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.interoperabilityEnabled"></a>

```typescript
public readonly interoperabilityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#interoperability_enabled WorkmailOrganization#interoperability_enabled}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#kms_key_arn WorkmailOrganization#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#region WorkmailOrganization#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#tags WorkmailOrganization#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WorkmailOrganizationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#timeouts WorkmailOrganization#timeouts}

---

### WorkmailOrganizationTimeouts <a name="WorkmailOrganizationTimeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts.Initializer"></a>

```typescript
import { workmailOrganization } from '@cdktn/provider-aws'

const workmailOrganizationTimeouts: workmailOrganization.WorkmailOrganizationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#create WorkmailOrganization#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/workmail_organization#delete WorkmailOrganization#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkmailOrganizationTimeoutsOutputReference <a name="WorkmailOrganizationTimeoutsOutputReference" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.Initializer"></a>

```typescript
import { workmailOrganization } from '@cdktn/provider-aws'

new workmailOrganization.WorkmailOrganizationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkmailOrganizationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a>

---



