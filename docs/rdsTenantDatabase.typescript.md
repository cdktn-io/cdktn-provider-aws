# `rdsTenantDatabase` Submodule <a name="`rdsTenantDatabase` Submodule" id="@cdktn/provider-aws.rdsTenantDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsTenantDatabase <a name="RdsTenantDatabase" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database aws_rds_tenant_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer"></a>

```typescript
import { rdsTenantDatabase } from '@cdktn/provider-aws'

new rdsTenantDatabase.RdsTenantDatabase(scope: Construct, id: string, config: RdsTenantDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig">RdsTenantDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig">RdsTenantDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetCharacterSetName">resetCharacterSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetFinalSnapshotIdentifier">resetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetManageMasterUserPassword">resetManageMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserPassword">resetMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserPasswordWo">resetMasterUserPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserPasswordWoVersion">resetMasterUserPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserSecretKmsKeyId">resetMasterUserSecretKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetNcharCharacterSetName">resetNcharCharacterSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetSkipFinalSnapshot">resetSkipFinalSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: RdsTenantDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts">RdsTenantDatabaseTimeouts</a>

---

##### `resetCharacterSetName` <a name="resetCharacterSetName" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetCharacterSetName"></a>

```typescript
public resetCharacterSetName(): void
```

##### `resetFinalSnapshotIdentifier` <a name="resetFinalSnapshotIdentifier" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetFinalSnapshotIdentifier"></a>

```typescript
public resetFinalSnapshotIdentifier(): void
```

##### `resetManageMasterUserPassword` <a name="resetManageMasterUserPassword" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetManageMasterUserPassword"></a>

```typescript
public resetManageMasterUserPassword(): void
```

##### `resetMasterUserPassword` <a name="resetMasterUserPassword" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserPassword"></a>

```typescript
public resetMasterUserPassword(): void
```

##### `resetMasterUserPasswordWo` <a name="resetMasterUserPasswordWo" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserPasswordWo"></a>

```typescript
public resetMasterUserPasswordWo(): void
```

##### `resetMasterUserPasswordWoVersion` <a name="resetMasterUserPasswordWoVersion" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserPasswordWoVersion"></a>

```typescript
public resetMasterUserPasswordWoVersion(): void
```

##### `resetMasterUserSecretKmsKeyId` <a name="resetMasterUserSecretKmsKeyId" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserSecretKmsKeyId"></a>

```typescript
public resetMasterUserSecretKmsKeyId(): void
```

##### `resetNcharCharacterSetName` <a name="resetNcharCharacterSetName" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetNcharCharacterSetName"></a>

```typescript
public resetNcharCharacterSetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSkipFinalSnapshot` <a name="resetSkipFinalSnapshot" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetSkipFinalSnapshot"></a>

```typescript
public resetSkipFinalSnapshot(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsTenantDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isConstruct"></a>

```typescript
import { rdsTenantDatabase } from '@cdktn/provider-aws'

rdsTenantDatabase.RdsTenantDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isTerraformElement"></a>

```typescript
import { rdsTenantDatabase } from '@cdktn/provider-aws'

rdsTenantDatabase.RdsTenantDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isTerraformResource"></a>

```typescript
import { rdsTenantDatabase } from '@cdktn/provider-aws'

rdsTenantDatabase.RdsTenantDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.generateConfigForImport"></a>

```typescript
import { rdsTenantDatabase } from '@cdktn/provider-aws'

rdsTenantDatabase.RdsTenantDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RdsTenantDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsTenantDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsTenantDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsTenantDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserSecret">masterUserSecret</a></code> | <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList">RdsTenantDatabaseMasterUserSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tenantDatabaseResourceId">tenantDatabaseResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference">RdsTenantDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.characterSetNameInput">characterSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.dbInstanceIdentifierInput">dbInstanceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.finalSnapshotIdentifierInput">finalSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.manageMasterUserPasswordInput">manageMasterUserPasswordInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUsernameInput">masterUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordInput">masterUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWoInput">masterUserPasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWoVersionInput">masterUserPasswordWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserSecretKmsKeyIdInput">masterUserSecretKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.ncharCharacterSetNameInput">ncharCharacterSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.skipFinalSnapshotInput">skipFinalSnapshotInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tenantDbNameInput">tenantDbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts">RdsTenantDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.characterSetName">characterSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.manageMasterUserPassword">manageMasterUserPassword</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUsername">masterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPassword">masterUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWo">masterUserPasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWoVersion">masterUserPasswordWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserSecretKmsKeyId">masterUserSecretKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.ncharCharacterSetName">ncharCharacterSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tenantDbName">tenantDbName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `masterUserSecret`<sup>Required</sup> <a name="masterUserSecret" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserSecret"></a>

```typescript
public readonly masterUserSecret: RdsTenantDatabaseMasterUserSecretList;
```

- *Type:* <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList">RdsTenantDatabaseMasterUserSecretList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `tenantDatabaseResourceId`<sup>Required</sup> <a name="tenantDatabaseResourceId" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tenantDatabaseResourceId"></a>

```typescript
public readonly tenantDatabaseResourceId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: RdsTenantDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference">RdsTenantDatabaseTimeoutsOutputReference</a>

---

##### `characterSetNameInput`<sup>Optional</sup> <a name="characterSetNameInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.characterSetNameInput"></a>

```typescript
public readonly characterSetNameInput: string;
```

- *Type:* string

---

##### `dbInstanceIdentifierInput`<sup>Optional</sup> <a name="dbInstanceIdentifierInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.dbInstanceIdentifierInput"></a>

```typescript
public readonly dbInstanceIdentifierInput: string;
```

- *Type:* string

---

##### `finalSnapshotIdentifierInput`<sup>Optional</sup> <a name="finalSnapshotIdentifierInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.finalSnapshotIdentifierInput"></a>

```typescript
public readonly finalSnapshotIdentifierInput: string;
```

- *Type:* string

---

##### `manageMasterUserPasswordInput`<sup>Optional</sup> <a name="manageMasterUserPasswordInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.manageMasterUserPasswordInput"></a>

```typescript
public readonly manageMasterUserPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `masterUsernameInput`<sup>Optional</sup> <a name="masterUsernameInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUsernameInput"></a>

```typescript
public readonly masterUsernameInput: string;
```

- *Type:* string

---

##### `masterUserPasswordInput`<sup>Optional</sup> <a name="masterUserPasswordInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordInput"></a>

```typescript
public readonly masterUserPasswordInput: string;
```

- *Type:* string

---

##### `masterUserPasswordWoInput`<sup>Optional</sup> <a name="masterUserPasswordWoInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWoInput"></a>

```typescript
public readonly masterUserPasswordWoInput: string;
```

- *Type:* string

---

##### `masterUserPasswordWoVersionInput`<sup>Optional</sup> <a name="masterUserPasswordWoVersionInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWoVersionInput"></a>

```typescript
public readonly masterUserPasswordWoVersionInput: number;
```

- *Type:* number

---

##### `masterUserSecretKmsKeyIdInput`<sup>Optional</sup> <a name="masterUserSecretKmsKeyIdInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserSecretKmsKeyIdInput"></a>

```typescript
public readonly masterUserSecretKmsKeyIdInput: string;
```

- *Type:* string

---

##### `ncharCharacterSetNameInput`<sup>Optional</sup> <a name="ncharCharacterSetNameInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.ncharCharacterSetNameInput"></a>

```typescript
public readonly ncharCharacterSetNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `skipFinalSnapshotInput`<sup>Optional</sup> <a name="skipFinalSnapshotInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.skipFinalSnapshotInput"></a>

```typescript
public readonly skipFinalSnapshotInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenantDbNameInput`<sup>Optional</sup> <a name="tenantDbNameInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tenantDbNameInput"></a>

```typescript
public readonly tenantDbNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RdsTenantDatabaseTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts">RdsTenantDatabaseTimeouts</a>

---

##### `characterSetName`<sup>Required</sup> <a name="characterSetName" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.characterSetName"></a>

```typescript
public readonly characterSetName: string;
```

- *Type:* string

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

---

##### `finalSnapshotIdentifier`<sup>Required</sup> <a name="finalSnapshotIdentifier" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.finalSnapshotIdentifier"></a>

```typescript
public readonly finalSnapshotIdentifier: string;
```

- *Type:* string

---

##### `manageMasterUserPassword`<sup>Required</sup> <a name="manageMasterUserPassword" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.manageMasterUserPassword"></a>

```typescript
public readonly manageMasterUserPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUsername"></a>

```typescript
public readonly masterUsername: string;
```

- *Type:* string

---

##### `masterUserPassword`<sup>Required</sup> <a name="masterUserPassword" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPassword"></a>

```typescript
public readonly masterUserPassword: string;
```

- *Type:* string

---

##### ~~`masterUserPasswordWo`~~<sup>Required</sup> <a name="masterUserPasswordWo" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly masterUserPasswordWo: string;
```

- *Type:* string

---

##### `masterUserPasswordWoVersion`<sup>Required</sup> <a name="masterUserPasswordWoVersion" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWoVersion"></a>

```typescript
public readonly masterUserPasswordWoVersion: number;
```

- *Type:* number

---

##### `masterUserSecretKmsKeyId`<sup>Required</sup> <a name="masterUserSecretKmsKeyId" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserSecretKmsKeyId"></a>

```typescript
public readonly masterUserSecretKmsKeyId: string;
```

- *Type:* string

---

##### `ncharCharacterSetName`<sup>Required</sup> <a name="ncharCharacterSetName" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.ncharCharacterSetName"></a>

```typescript
public readonly ncharCharacterSetName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `skipFinalSnapshot`<sup>Required</sup> <a name="skipFinalSnapshot" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.skipFinalSnapshot"></a>

```typescript
public readonly skipFinalSnapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenantDbName`<sup>Required</sup> <a name="tenantDbName" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tenantDbName"></a>

```typescript
public readonly tenantDbName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsTenantDatabaseConfig <a name="RdsTenantDatabaseConfig" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.Initializer"></a>

```typescript
import { rdsTenantDatabase } from '@cdktn/provider-aws'

const rdsTenantDatabaseConfig: rdsTenantDatabase.RdsTenantDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#db_instance_identifier RdsTenantDatabase#db_instance_identifier}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUsername">masterUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_username RdsTenantDatabase#master_username}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.tenantDbName">tenantDbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#tenant_db_name RdsTenantDatabase#tenant_db_name}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.characterSetName">characterSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#character_set_name RdsTenantDatabase#character_set_name}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#final_snapshot_identifier RdsTenantDatabase#final_snapshot_identifier}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.manageMasterUserPassword">manageMasterUserPassword</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#manage_master_user_password RdsTenantDatabase#manage_master_user_password}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserPassword">masterUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password RdsTenantDatabase#master_user_password}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserPasswordWo">masterUserPasswordWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password_wo RdsTenantDatabase#master_user_password_wo}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserPasswordWoVersion">masterUserPasswordWoVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password_wo_version RdsTenantDatabase#master_user_password_wo_version}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserSecretKmsKeyId">masterUserSecretKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_secret_kms_key_id RdsTenantDatabase#master_user_secret_kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.ncharCharacterSetName">ncharCharacterSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#nchar_character_set_name RdsTenantDatabase#nchar_character_set_name}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#skip_final_snapshot RdsTenantDatabase#skip_final_snapshot}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#tags RdsTenantDatabase#tags}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts">RdsTenantDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#db_instance_identifier RdsTenantDatabase#db_instance_identifier}.

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUsername"></a>

```typescript
public readonly masterUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_username RdsTenantDatabase#master_username}.

---

##### `tenantDbName`<sup>Required</sup> <a name="tenantDbName" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.tenantDbName"></a>

```typescript
public readonly tenantDbName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#tenant_db_name RdsTenantDatabase#tenant_db_name}.

---

##### `characterSetName`<sup>Optional</sup> <a name="characterSetName" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.characterSetName"></a>

```typescript
public readonly characterSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#character_set_name RdsTenantDatabase#character_set_name}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.finalSnapshotIdentifier"></a>

```typescript
public readonly finalSnapshotIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#final_snapshot_identifier RdsTenantDatabase#final_snapshot_identifier}.

---

##### `manageMasterUserPassword`<sup>Optional</sup> <a name="manageMasterUserPassword" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.manageMasterUserPassword"></a>

```typescript
public readonly manageMasterUserPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#manage_master_user_password RdsTenantDatabase#manage_master_user_password}.

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserPassword"></a>

```typescript
public readonly masterUserPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password RdsTenantDatabase#master_user_password}.

---

##### `masterUserPasswordWo`<sup>Optional</sup> <a name="masterUserPasswordWo" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserPasswordWo"></a>

```typescript
public readonly masterUserPasswordWo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password_wo RdsTenantDatabase#master_user_password_wo}.

---

##### `masterUserPasswordWoVersion`<sup>Optional</sup> <a name="masterUserPasswordWoVersion" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserPasswordWoVersion"></a>

```typescript
public readonly masterUserPasswordWoVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password_wo_version RdsTenantDatabase#master_user_password_wo_version}.

---

##### `masterUserSecretKmsKeyId`<sup>Optional</sup> <a name="masterUserSecretKmsKeyId" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserSecretKmsKeyId"></a>

```typescript
public readonly masterUserSecretKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_secret_kms_key_id RdsTenantDatabase#master_user_secret_kms_key_id}.

---

##### `ncharCharacterSetName`<sup>Optional</sup> <a name="ncharCharacterSetName" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.ncharCharacterSetName"></a>

```typescript
public readonly ncharCharacterSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#nchar_character_set_name RdsTenantDatabase#nchar_character_set_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#region RdsTenantDatabase#region}

---

##### `skipFinalSnapshot`<sup>Optional</sup> <a name="skipFinalSnapshot" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.skipFinalSnapshot"></a>

```typescript
public readonly skipFinalSnapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#skip_final_snapshot RdsTenantDatabase#skip_final_snapshot}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#tags RdsTenantDatabase#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RdsTenantDatabaseTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts">RdsTenantDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#timeouts RdsTenantDatabase#timeouts}

---

### RdsTenantDatabaseMasterUserSecret <a name="RdsTenantDatabaseMasterUserSecret" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecret.Initializer"></a>

```typescript
import { rdsTenantDatabase } from '@cdktn/provider-aws'

const rdsTenantDatabaseMasterUserSecret: rdsTenantDatabase.RdsTenantDatabaseMasterUserSecret = { ... }
```


### RdsTenantDatabaseTimeouts <a name="RdsTenantDatabaseTimeouts" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts.Initializer"></a>

```typescript
import { rdsTenantDatabase } from '@cdktn/provider-aws'

const rdsTenantDatabaseTimeouts: rdsTenantDatabase.RdsTenantDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#create RdsTenantDatabase#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#delete RdsTenantDatabase#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#update RdsTenantDatabase#update}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsTenantDatabaseMasterUserSecretList <a name="RdsTenantDatabaseMasterUserSecretList" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.Initializer"></a>

```typescript
import { rdsTenantDatabase } from '@cdktn/provider-aws'

new rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.get"></a>

```typescript
public get(index: number): RdsTenantDatabaseMasterUserSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### RdsTenantDatabaseMasterUserSecretOutputReference <a name="RdsTenantDatabaseMasterUserSecretOutputReference" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer"></a>

```typescript
import { rdsTenantDatabase } from '@cdktn/provider-aws'

new rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.secretStatus">secretStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecret">RdsTenantDatabaseMasterUserSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `secretStatus`<sup>Required</sup> <a name="secretStatus" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.secretStatus"></a>

```typescript
public readonly secretStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsTenantDatabaseMasterUserSecret;
```

- *Type:* <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecret">RdsTenantDatabaseMasterUserSecret</a>

---


### RdsTenantDatabaseTimeoutsOutputReference <a name="RdsTenantDatabaseTimeoutsOutputReference" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { rdsTenantDatabase } from '@cdktn/provider-aws'

new rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts">RdsTenantDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsTenantDatabaseTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts">RdsTenantDatabaseTimeouts</a>

---



